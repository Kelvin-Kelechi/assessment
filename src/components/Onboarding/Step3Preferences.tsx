import React from "react";

interface Props {
  formData: {
    theme: "Light" | "Dark";
    newsletter: boolean;
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
}

const Step3Preferences: React.FC<Props> = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
        Theme
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        value={formData.theme}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            theme: e.target.value as "Light" | "Dark",
          }))
        }
      >
        <option
          value="Light"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          Light
        </option>
        <option
          value="Dark"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          Dark
        </option>
      </select>
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={formData.newsletter}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            newsletter: e.target.checked,
          }))
        }
        className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 bg-white dark:bg-gray-700"
      />
      <label className="text-sm text-gray-900 dark:text-white ml-2">
        Subscribe to newsletter?
      </label>
    </div>
  </div>
);

export default Step3Preferences;
