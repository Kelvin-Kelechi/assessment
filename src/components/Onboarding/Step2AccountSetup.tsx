import React from "react";

interface Props {
  formData: {
    username: string;
    password: string;
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
    username?: string;
    password?: string;
  };
}

const Step2AccountSetup: React.FC<Props> = ({
  formData,
  setFormData,
  errors,
}) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
        Username
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        placeholder="Choose a username"
        value={formData.username}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">{errors.username}</p>
      )}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
        Password
      </label>
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        placeholder="Create a password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}
    </div>
  </div>
);

export default Step2AccountSetup;
