import { ConfigProvider, Select } from "antd";
import Area_Chart from "../Chart/AreaChart";
import { Link } from "react-router-dom";

import { AllIcons } from "../../../public/images/AllImages";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewUserModal from "../UI/ViewCustomerModal";
import DeleteUserModal from "../UI/DeleteUserModal";
import RecentUserTable from "../Tables/RecentUserTable";
import HourArea_Chart from "../Chart/HourAreaChart";
import IncomeBarChart from "../Chart/IncomeBarChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //* It's Use to Show Modal
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);

  //* It's Use to Show Delete Modal
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  //* It's Use to Set Seclected User to delete and view
  const [currentRecord, setCurrentRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/userData.json");
        const recentData = response.data?.slice(0, 5);

        setData(recentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const showViewModal = (record) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  const showDeleteModal = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = (data) => {
    // Handle delete action here
    console.log({ id: data?.id, userName: data?.userName });
    setIsDeleteModalVisible(false);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setIsDeleteModalVisible(false);
  };

  const handleBlock = (data) => {
    console.log("Blocked User:", { id: data?.id, userName: data?.userName });
    setIsViewModalVisible(false);
  };

  return (
    <div className="w-full min-h-[90vh] px-1 sm:px-2 lg:px-2">
      <div>
        <div>
          {/* Card Items */}
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5 mt-8 w-full">
            <div className="flex gap-5 flex-wrap rounded-lg bg-[#FE5C8E] border border-[#FE5C8E] py-2 px-1 lg:p-5 items-center  flex-1">
              <div className="flex gap-2 xl:gap-4 items-center">
                <div className="p-3 w-fit">
                  <img
                    src={AllIcons.groupsPerson}
                    className="h-10 w-10"
                    alt=""
                  />
                </div>
                <div className="text-start">
                  <p className="text-xs lg:text-base xl:text-2xl text-primary-color mb-1">
                    Total customer
                  </p>
                  <p className="text-sm lg:text-base xl:text-3xl font-medium text-primary-color">
                    12K
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 flex-wrap rounded-lg bg-[#FEF2F5] border border-secondary-color py-2 px-1 xl:p-5 items-center  flex-1">
              <div className="flex gap-2 xl:gap-4 items-center">
                <div className="p-3  w-fit">
                  <img src={AllIcons.person} className="h-10 w-10" alt="" />
                </div>
                <div className="text-start">
                  <p className="text-xs lg:text-sm xl:text-2xl text-secondary-color mb-1">
                    Total Business
                  </p>
                  <p className="text-sm lg:text-base xl:text-3xl font-medium text-secondary-color">
                    740
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full">
            <div
              className="w-full p-3 bg-[#FFFFFF] rounded-lg border border-input-color"
              //
            >
              <div className="flex justify-between text-base-color mt-4">
                <p className="text-2xl sm:text-3xl mb-5">Income</p>
                <div>
                  <ConfigProvider
                    theme={{
                      components: {
                        Select: {
                          fontSize: 16,
                          colorBorder: "#222222",
                        },
                      },
                    }}
                  >
                    <Select
                      defaultValue="2024"
                      options={[
                        { value: "2024", label: "2024" },
                        { value: "2023", label: "2023" },
                        { value: "2022", label: "2022" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
              </div>
              <div>
                <IncomeBarChart />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5 mt-8 w-full">
            <div
              className="w-full p-3 bg-[#FFFFFF] rounded-lg border border-input-color"
              //
            >
              <div className="flex justify-between text-base-color mt-4">
                <p className="text-2xl sm:text-3xl mb-5">Income</p>
                <div>
                  <ConfigProvider
                    theme={{
                      components: {
                        Select: {
                          fontSize: 16,
                          colorBorder: "#222222",
                        },
                      },
                    }}
                  >
                    <Select
                      defaultValue="Last 7 days"
                      options={[{ value: "7", label: "Last 7 days" }]}
                    />
                  </ConfigProvider>
                </div>
              </div>
              <div>
                <Area_Chart />
              </div>
            </div>
            <div
              className="w-full p-3 bg-[#FFFFFF] rounded-lg border border-input-color"
              //
            >
              <div className="flex justify-between text-base-color mt-4">
                <p className="text-2xl sm:text-3xl mb-5">Income</p>
                <div>
                  <ConfigProvider
                    theme={{
                      components: {
                        Select: {
                          fontSize: 16,
                          colorBorder: "#222222",
                        },
                      },
                    }}
                  >
                    <Select
                      defaultValue="Last 24 Hours"
                      options={[{ value: "7", label: "Last 24 Hours" }]}
                    />
                  </ConfigProvider>
                </div>
              </div>
              <div>
                <HourArea_Chart />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-5">
            <div className="bg-[#FFFFFF] rounded flex-1 p-3">
              <div className="flex justify-between items-center mx-3 py-2">
                <p className="text-2xl font-semibold text-base-color">
                  Recent Appointments
                </p>
                <div>
                  <Link to="/users">
                    <p className="bg-[#FEF2F5] border border-secondary-color text-[#FE5C8E] px-3 py-1 rounded-lg">
                      See All
                    </p>
                  </Link>
                </div>
              </div>
              <RecentUserTable
                data={data}
                loading={loading}
                showViewModal={showViewModal}
                showDeleteModal={showDeleteModal}
              />
            </div>
          </div>
        </div>
        <ViewUserModal
          isViewModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          handleBlock={handleBlock}
        />
        <DeleteUserModal
          isDeleteModalVisible={isDeleteModalVisible}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
      </div>
    </div>
  );
};

export default Dashboard;
