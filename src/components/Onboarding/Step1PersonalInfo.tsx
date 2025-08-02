import React from "react";

interface Props {
  formData: {
    fullName: string;
    email: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      username: string;
      password: string;
      theme: "Light" | "Dark";
      newsletter: boolean;
    }>
  >;
  errors: {
    fullName?: string;
    email?: string;
  };
}

const Step1PersonalInfo: React.FC<Props> = ({
  formData,
  setFormData,
  errors,
}) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
        Full Name
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, fullName: e.target.value }))
        }
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
      )}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
        Email Address
      </label>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>
  </div>
);

export default Step1PersonalInfo;
