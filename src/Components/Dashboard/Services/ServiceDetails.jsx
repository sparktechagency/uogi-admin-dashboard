import { AllImages, AllServices } from "../../../../public/images/AllImages";

const serviceData = {
  price: 50,
  serviceName: "Brows and Lashes",
  imageUrl: AllServices.service1,
  description:
    "Brows and Lashes enhance your natural beauty, giving you perfectly shaped eyebrows and fuller, longer lashes. Achieve a polished, defined look with professional treatments tailored to your style.",
  owner: {
    name: "Olivia Ema",
    profilePic: AllImages.userImage,
    email: "olivia.ema@gmail.com",
    contactNumber: "123-456-7890",
  },
};

const ServiceDetails = () => {
  return (
    <div className=" min-h-[90vh] mx-auto p-8 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-secondary-color">
          Service details
        </h2>
      </div>

      <div className="w-full sm:w-[80%] lg:w-[70%] xl:w-[60%]">
        {/* Image Section */}
        <div className="mb-6">
          <img
            src={serviceData.imageUrl} // Replace with actual image URL
            alt="Brows and Lashes"
            className="w-full  rounded-lg object-cover"
          />
        </div>

        {/* Service Info Section */}
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">
            {serviceData.serviceName}
          </h3>
          <p className="text-base-color text-lg mb-4">
            <span className="font-semibold">Details:</span>
            {serviceData.description}
          </p>
          <p className="text-base-color text-lg  font-semibold">
            Price: <span className="text-xl">£{serviceData.price}</span>
          </p>
        </div>

        {/* Business Owner Info Section */}
        <div className="flex items-center space-x-4">
          <img
            src={serviceData.owner.profilePic} // Replace with actual owner image URL
            alt={serviceData.owner.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold">{serviceData.owner.name}</h4>
            <p className="text-gray-600">Email: {serviceData.owner.email}</p>
            <p className="text-gray-600">
              Contact number: {serviceData.owner.contactNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
