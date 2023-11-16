import Usuario from "../models/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { nombreUsuario, nombre, password,sucursal, huella } = req.body;

  try {
    const userFound = await Usuario.findOne({ nombre });
    if (userFound)
      return res
        .status(400)
        .json({error:["El nombre de usuario ya existe"]});
        
    const passwordHash = await bcrypt.hash(password, 10);

    const newUsuario = new Usuario({
      nombreUsuario: nombreUsuario,
      nombre: nombre,
      password: passwordHash,
      sucursal: sucursal,
      huella: huella,
    });

    const userSaved = await newUsuario.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      nombreUsuario: userSaved.nombreUsuario,
      nombre: userSaved.nombre,
      sucursal: userSaved.sucursal,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { nombreUsuario, password } = req.body;

  try {
    const userFound = await Usuario.findOne({ nombreUsuario });
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      nombreUsuario: userFound.nombreUsuario,
      nombre: userFound.nombre,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await Usuario.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    nombreUsuario: userFound.nombreUsuario,
    nombre: userFound.nombre,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const {token} =  req.cookies
  
  if(!token) return res.status(401).json({message: "No autorizado"})

  jwt.verify(token, TOKEN_SECRET, async (err, usuario) =>{
    if(err) return res.status(401).json({message: 'no autorizado'})

    const userFound = await Usuario.findById(usuario.id)
    if(!userFound) return res.status(401).json({message: 'no autorizado'})

    return res.json({
      id: userFound._id,
      nombreUsuario: userFound.nombreUsuario,
      nombre: userFound.nombre
    })

  })
}