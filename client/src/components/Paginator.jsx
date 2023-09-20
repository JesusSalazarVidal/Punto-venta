

function Paginator({ currentPage, totalPages, onPageChange }) {

        // Crea un array con números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
      
        return (
          <nav className=" mt-5 ">
          <ul className="flex justify-end space-x-2">
            {pageNumbers.map((page) => (
              <li key={page}>
                <button
                  className={`px-3 py-2 ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'bg-pink-200 text-black hover:bg-pink-500'
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        );
      };

export default Paginator