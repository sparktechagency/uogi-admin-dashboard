/* eslint-disable react/prop-types */
import { Table } from "antd";

const RecentUserTable = ({ data, loading, pageSize = 0 }) => {
  const columns = [
    {
      title: "#SI",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={record.image}
            alt={text}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              marginRight: 10,
            }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Price",
      dataIndex: "servicePrice",
      key: "servicePrice",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
    },
    {
      title: "Process",
      dataIndex: "process",
      key: "process",
      render: () => {
        return <div className="">User</div>;
      },
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pageSize > 0 ? { pageSize } : false}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default RecentUserTable;
