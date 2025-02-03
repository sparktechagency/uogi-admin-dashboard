import { useState } from "react";
import { AllImages, AllServices } from "../../../../public/images/AllImages";
import { Link } from "react-router-dom";
import { ConfigProvider, Select } from "antd";

const services = [
  {
    _id: "001",
    serviceName: "Brows and Lashes",
    businessName: "",
    owner: "Olivia Ema",
    imageUrl: AllServices.service1,
    price: "30",
  },
  {
    _id: "002",
    serviceName: "Manicure / pedicure",
    businessName: "",
    owner: "Sophia Ava",
    imageUrl: AllServices.service2,
    price: "25",
  },
  {
    _id: "003",
    serviceName: "Aesthetics",
    businessName: "",
    owner: "Emma Lily",
    imageUrl: AllServices.service3,
    price: "40",
  },
  {
    _id: "004",
    serviceName: "Waxing",
    businessName: "",
    owner: "Mia Sophia",
    imageUrl: AllServices.service4,
    price: "20",
  },
  {
    _id: "005",
    serviceName: "Hairdressers",
    businessName: "",
    owner: "Ava Harper",
    imageUrl: AllServices.service5,
    price: "35",
  },
  {
    _id: "006",
    serviceName: "Make up artists",
    businessName: "",
    owner: "Sophia Olivia",
    imageUrl: AllServices.service6,
    price: "50",
  },
  {
    _id: "007",
    serviceName: "Brows and Lashes",
    businessName: "",
    owner: "Lily Ava",
    imageUrl: AllServices.service1,
    price: "30",
  },
  {
    _id: "008",
    serviceName: "Manicure / pedicure",
    businessName: "",
    owner: "Isabella Mia",
    imageUrl: AllServices.service2,
    price: "25",
  },
  {
    _id: "009",
    serviceName: "Aesthetics",
    businessName: "",
    owner: "Harper Emma",
    imageUrl: AllServices.service3,
    price: "40",
  },
  {
    _id: "010",
    serviceName: "Waxing",
    businessName: "",
    owner: "Lily Olivia",
    imageUrl: AllServices.service4,
    price: "20",
  },
  {
    _id: "011",
    serviceName: "Hairdressers",
    businessName: "",
    owner: "Emma Ava",
    imageUrl: AllServices.service5,
    price: "35",
  },
  {
    _id: "012",
    serviceName: "Make up artists",
    businessName: "",
    owner: "Ava Mia",
    imageUrl: AllServices.service6,
    price: "50",
  },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique service names for dropdown options
  const uniqueCategories = [
    ...new Set(services.map((service) => service.serviceName)),
  ];

  // Filtered services based on selected category
  const filteredServices = selectedCategory
    ? services.filter((service) => service.serviceName === selectedCategory)
    : services;

  return (
    <div className="min-h-[90vh]">
      <div className="bg-[#FFFFFF] rounded p-3">
        <div className="flex justify-between p-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
            <h1 className="text-3xl font-bold text-secondary-color">
              All categories
            </h1>
            <div>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      fontSize: 16,
                      colorBorder: "#FCC1BE",
                    },
                  },
                }}
              >
                <label className="text-secondary-color text-xl mr-2 font-bold">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onChange={(value) => setSelectedCategory(value)}
                  placeholder="Select Category"
                  className="w-[200px] !ring-[#FCC1BE] "
                >
                  <Select.Option value="">All Categories</Select.Option>
                  {uniqueCategories.map((category, index) => (
                    <Select.Option key={index} value={category}>
                      {category}
                    </Select.Option>
                  ))}
                </Select>
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div className="px-2 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {filteredServices.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service._id}`}
                className="hover:text-base-color"
              >
                <div className="flex flex-col gap-2 bg-[#FEF2F5] border border-[#FEF2F5] px-4 py-3 rounded-md">
                  <div className="relative rounded-md">
                    <img
                      src={service.imageUrl}
                      alt="service"
                      className="w-full h-[180px] sm:h-[220px] object-cover rounded-md"
                    />
                    <div className="w-full bg-[#18191B88] h-full absolute top-0 left-0 flex items-end rounded-md">
                      <h1 className="text-[#FFEBF1] text-xl md:text-3xl p-3">
                        {service.serviceName}
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mt-3">
                      <img
                        src={AllImages.userImage}
                        className="h-6 lg:h-8 w-6 lg:w-8 rounded-full"
                        alt="business"
                      />
                      <h1 className="text-2xl font-medium">{service.owner}</h1>
                    </div>
                    <p className="text-lg mt-1">
                      Price: <span>£{service.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
