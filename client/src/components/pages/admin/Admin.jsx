// Admin.js
import React, { useState } from "react";
import AdminNav from "./components/AdminNav";
import ItemCard from "./components/ItemCard";
import UserCard from "./components/UserCard";
import SearchCopm from "./components/SearchCopm";
import dataA from "./dataA.js"; // Assuming you have your data in dataA.js


function Admin({ onClick }) {
  const [searchResults, setSearchResults] = useState([]);
  const [showAllStudents, setShowAllStudents] = useState(true);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults([]);
      setShowAllStudents(true);
      return;
    }

    const results = dataA?.filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSearchResults(results || []);
    setShowAllStudents(!results || results.length === 0);
  };

  return (
    <section className="flex h-full flex-col bg-sky-100/20 transition-all duration-200 ease-in">
      <aside className="sticky top-0 z-50">
        <AdminNav onClick={onClick} />
      </aside>
      <main className="h-full flex-[100%] md:h-full md:flex-[80%]">
        <div className="my-4 flex w-full flex-row flex-wrap items-center justify-center gap-4 px-8 md:mx-auto md:my-16 md:w-[80%] md:justify-evenly md:p-0">
          <ItemCard title="Test Attend" amount="20" icon="attend" />
          <ItemCard title="Test Pass" amount="20" icon="pass" />
          <ItemCard title="Test Fail" amount="20" icon="fail" />
        </div>
        <div className="h-full px-1">
          <div>
            <SearchCopm
              onHideAllStudents={handleSearch}
              data={dataA}
              onSearch={handleSearch}
            />

            {searchResults.length > 0 ? (
              <>
                {searchResults?.map((user, i) => (
                  <UserCard
                    key={i}
                    clas={user.class}
                    email={user.email}
                    name={user.name}
                    number={user.number}
                    testP={user.testPass}
                    testA={user.testAttend}
                    testF={user.testFail}
                  />
                ))}
              </>
            ) : (
              showAllStudents && (
                <>
                  <div className="my-8 text-center text-3xl">All Students</div>
                  {dataA.map((user, i) => (
                    <UserCard
                      key={i}
                      clas={user.class}
                      email={user.email}
                      name={user.name}
                      number={user.number}
                      testP={user.testPass}
                      testA={user.testAttend}
                      testF={user.testFail}
                    />
                  ))}
                </>
              )
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Admin;
