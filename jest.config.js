module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/src/theme"],
  moduleNameMapper: {
    "@/components/(.*)": "<rootDir>/src/components/$1",
    "@/containers/(.*)": "<rootDir>/src/containers/$1",
    "@/hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@/layouts/(.*)": "<rootDir>/src/layouts/$1",
    "@/helpers/(.*)": "<rootDir>/src/helpers/$1",
    "@/utils/(.*)": "<rootDir>/src/utils/$1",
    "@/configs/(.*)": "<rootDir>/src/configs/$1",
    "@/constants/(.*)": "<rootDir>/src/constants/$1",
    "@/actions/(.*)": "<rootDir>/src/actions/$1",
    "@/theme": "<rootDir>/src/theme",
    "test-utils": "<rootDir>/src/utils/test-utils",
  },
};
