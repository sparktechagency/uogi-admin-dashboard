/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const BusinessTable = ({ data, loading, pageSize = 0 }) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Business Email",
      dataIndex: "businessEmail",
      key: "businessEmail",
      render: (_, record) => record?.businessId?.email || "N/A",
    },
    {
      title: "Total Service",
      dataIndex: "totalService",
      key: "totalService",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Completed Service",
      dataIndex: "completedService",
      key: "completedService",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Total Earning",
      dataIndex: "totalEarning",
      key: "totalEarning",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Total Withdraw",
      dataIndex: "totalWithdraw",
      key: "totalWithdraw",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="right" title="View Details">
            <Button
              className="!p-0"
              style={{
                background: "#FFFFFF",
                border: "none",
                color: "#222222",
              }}
              onClick={() => navigate(`/business/${record.id}`)} // Use navigate here
            >
              <GoEye style={{ fontSize: "24px" }} />
            </Button>
          </Tooltip>
        </Space>
      ),
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

export default BusinessTable;
