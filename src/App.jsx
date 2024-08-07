import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const App = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    phone: Yup.string(),
    email: Yup.string(),
    address: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    region: Yup.string(),
    zipcode: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
    gender: Yup.string(),

    cardName: Yup.string(),
    cardNumber: Yup.string(),
    expires: Yup.string(),
    cvc: Yup.string(),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    region: "",
    zipcode: "",
    state: "",
    gender: "",
    country: "",

    cardName: "",
    cardNumber: "",
    expires: "",
    cvc: "",
  };

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchPhone = watch("phone");
  const watchEmail = watch("email");
  const watchAddress = watch("address");
  const watchAddress2 = watch("address2");
  const watchCity = watch("city");
  const watchZipcode = watch("zipcode");
  const watchState = watch("state");
  const watchGender = watch("gender");
  const watchCountry = watch("country");

  const watchCardName = watch("cardName");
  const watchCardNumber = watch("cardNumber");
  const watchExpires = watch("expires");
  const watchCvc = watch("cvc");

  const submitValue = {
    fullName: `${watchFirstName} ${watchLastName}`,
    address: watchAddress,
    address2: watchAddress2,
    city: watchCity,
    state: watchState,
    zipCode: watchZipcode,
    email: watchEmail,
    phone: watchPhone,
    country: watchCountry,
    type: "visa",
    // Payment card information
    cardName: watchCardName,
    cardNumber: watchCardNumber,
    expires: watchExpires,
    cvc: watchCvc,
  };

  const onSubmit = async () => {
    setLoading(true);
    const res = await submitValue;
    console.log(res, "res");
    setLoading(false);
  };

  return (
    
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    //     <h2 className="text-2xl font-bold mb-6">Shipping information</h2>
    //     <form>
    //       <div className="grid grid-cols-1 gap-6">
    //         <div className="flex space-x-4">
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="first-name"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               First name
    //             </label>
    //             <input
    //               type="text"
    //               id="first-name"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="last-name"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Last name
    //             </label>
    //             <input
    //               type="text"
    //               id="last-name"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="company"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Company
    //           </label>
    //           <input
    //             type="text"
    //             id="company"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //           />
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="address"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Address
    //           </label>
    //           <input
    //             type="text"
    //             id="address"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //           />
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="apartment"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Apartment, suite, etc.
    //           </label>
    //           <input
    //             type="text"
    //             id="apartment"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //           />
    //         </div>

    //         <div className="flex space-x-4">
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="city"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               City
    //             </label>
    //             <input
    //               type="text"
    //               id="city"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="country"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Country
    //             </label>
    //             <select
    //               id="country"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             >
    //               <option>United States</option>
    //               {/* Add more countries as needed */}
    //             </select>
    //           </div>
    //         </div>

    //         <div className="flex space-x-4">
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="state"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               State / Province
    //             </label>
    //             <input
    //               type="text"
    //               id="state"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //           <div className="w-1/2">
    //             <label
    //               htmlFor="postal-code"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Postal code
    //             </label>
    //             <input
    //               type="text"
    //               id="postal-code"
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="phone"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Phone
    //           </label>
    //           <input
    //             type="text"
    //             id="phone"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default App;
