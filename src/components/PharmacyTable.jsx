import { useMemo, useState } from "react";
import "./PharmacyTable.css";

const imageUrl = (filename) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

const medicines = [
  {
    id: "8234",
    name: "Esomepazole",
    category: "Tablet",
    pharmacy: "Caring Pharmacy",
    discount: 1,
    price: 5,
    medicineImage: imageUrl("12234.jpg"),
    pharmacyImage: imageUrl("234t.jpg"),
  },
  {
    id: "872",
    name: "Gispirin",
    category: "Tablet",
    pharmacy: "OK Pharmacy",
    discount: 3,
    price: 9,
    medicineImage: imageUrl("45678.jpg"),
    pharmacyImage: imageUrl("cvb.jpg"),
  },
  {
    id: "0134",
    name: "Mucoangin",
    category: "Tablet",
    pharmacy: "Hilton Medical",
    discount: 5,
    price: 7,
    medicineImage: imageUrl("0909.jpg"),
    pharmacyImage: imageUrl("iop.jpg"),
  },
  {
    id: "113",
    name: "Parastamol",
    category: "Tablet",
    pharmacy: "Hinucion Pharma",
    discount: 5,
    price: 9,
    medicineImage: imageUrl("12367.jpg"),
    pharmacyImage: imageUrl("dfgh.jpg"),
  },
  {
    id: "629",
    name: "Paracetamol",
    category: "Tablet",
    pharmacy: "Hamza Medical Pharmacy",
    discount: 7,
    price: 20,
    medicineImage: imageUrl("123456.jpg"),
    pharmacyImage: imageUrl("dfg.jpg"),
  },
  {
    id: "634729",
    name: "Pandalol",
    category: "Tablet",
    pharmacy: "Food Panda",
    discount: 0,
    price: 20,
    medicineImage: imageUrl("98765.jpg"),
    pharmacyImage: imageUrl("fgh.jpg"),
  },
];

export default function PharmacyTable({ globalSearch = "" }) {
  const [tableSearch, setTableSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  // هر دو سرچ روی جدول تأثیر می‌گذارند
  const filteredMedicines = useMemo(() => {
    const query = `${globalSearch} ${tableSearch}`
      .trim()
      .toLowerCase();

    const words = query.split(/\s+/).filter(Boolean);

    return medicines.filter((medicine) => {
      const searchableText = [
        medicine.id,
        medicine.name,
        medicine.category,
        medicine.pharmacy,
        medicine.discount,
        medicine.price,
      ]
        .join(" ")
        .toLowerCase();

      return words.every((word) => searchableText.includes(word));
    });
  }, [globalSearch, tableSearch]);

  // مرتب‌سازی ستون‌ها
  const sortedMedicines = useMemo(() => {
    return [...filteredMedicines].sort((a, b) => {
      const first = a[sortConfig.key];
      const second = b[sortConfig.key];

      const comparison =
        typeof first === "number" && typeof second === "number"
          ? first - second
          : String(first).localeCompare(String(second));

      return sortConfig.direction === "asc"
        ? comparison
        : -comparison;
    });
  }, [filteredMedicines, sortConfig]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedMedicines.length / entriesPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * entriesPerPage;

  const visibleMedicines = sortedMedicines.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  function changeSort(key) {
    setSortConfig((previous) => ({
      key,
      direction:
        previous.key === key && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));

    setCurrentPage(1);
  }

  function handleTableSearch(event) {
    setTableSearch(event.target.value);
    setCurrentPage(1);
  }

  function handleEntriesChange(event) {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  }

  const firstEntry =
    sortedMedicines.length === 0 ? 0 : startIndex + 1;

  const lastEntry = Math.min(
    startIndex + entriesPerPage,
    sortedMedicines.length
  );

  return (
    <section className="medicine-table-section">
      <h2 className="table-title">
        {sortedMedicines.length} Medicine returned
        {globalSearch.trim()
          ? ` for the keyword ${globalSearch}`
          : ""}
      </h2>

      <div className="table-controls">
        <label className="entries-control">
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            aria-label="Entries per page"
          >
            <option value={5}>5</option>
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>

          <span>entries per page</span>
        </label>

        <input
          className="table-search"
          type="search"
          placeholder="Search..."
          value={tableSearch}
          onChange={handleTableSearch}
          aria-label="Search medicines and pharmacies"
        />
      </div>

      <div className="table-responsive">
        <table className="medicine-table">
          <thead>
            <tr>
              <th>
                <button onClick={() => changeSort("name")}>
                  NAME ↕
                </button>
              </th>

              <th>
                <button onClick={() => changeSort("category")}>
                  CATEGORY ↕
                </button>
              </th>

              <th>
                <button onClick={() => changeSort("pharmacy")}>
                  SERVICE BY ↕
                </button>
              </th>

              <th>
                <button onClick={() => changeSort("discount")}>
                  DISCOUNT ↕
                </button>
              </th>

              <th>
                <button onClick={() => changeSort("price")}>
                  PRICE ↕
                </button>
              </th>

              <th>
                <button onClick={() => changeSort("id")}>
                  ID ↕
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {visibleMedicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>
                  <div className="medicine-cell">
                    <img
                      src={medicine.medicineImage}
                      alt={medicine.name}
                      className="table-medicine-image"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />

                    <span>{medicine.name}</span>
                  </div>
                </td>

                <td>{medicine.category}</td>

                <td>
                  <div className="pharmacy-cell">
                    <img
                      src={medicine.pharmacyImage}
                      alt={medicine.pharmacy}
                      className="table-pharmacy-image"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />

                    <span>{medicine.pharmacy}</span>
                  </div>
                </td>

                <td>{medicine.discount}</td>

                <td>{medicine.price} RM</td>

                <td>{medicine.id}</td>
              </tr>
            ))}

            {visibleMedicines.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-table">
                  No medicines found. Try another keyword.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span>
          Showing {firstEntry} to {lastEntry} of{" "}
          {sortedMedicines.length} entries
        </span>

        <div className="pagination">
          <button
            type="button"
            disabled={safePage === 1}
            onClick={() => setCurrentPage(safePage - 1)}
          >
            Previous
          </button>

          <span>
            {safePage} / {totalPages}
          </span>

          <button
            type="button"
            disabled={safePage === totalPages}
            onClick={() => setCurrentPage(safePage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}