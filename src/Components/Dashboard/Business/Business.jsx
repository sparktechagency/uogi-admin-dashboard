import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import BusinessTable from "../../Tables/BusinessTable";

const Business = () => {
  //* Store Search Value
  const [searchText, setSearchText] = useState("");

  //* Use to set user
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/businessData.json");

        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (!searchText) return data;
    return data.filter((item) =>
      item.businessName.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div className="min-h-[90vh]">
      <div className="bg-[#FFFFFF] rounded">
        <div className="flex justify-between p-6">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-secondary-color">
              Business List
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Search User..."
              value={searchText}
              onChange={(e) => onSearch(e.target.value)}
              className="text-base font-semibold !border-input-color py-2"
              prefix={
                <SearchOutlined className="text-[#222222] font-bold text-lg mr-2" />
              }
            />
          </div>
        </div>
        <div className="px-2 lg:px-6">
          <BusinessTable data={filteredData} loading={loading} pageSize={12} />
        </div>
      </div>
    </div>
  );
};

export default Business;
