import React from "react";
import { SelectUserType } from "../components";
import { AuthLayout } from "../layout/AuthLayout";

export const SelectUserTypePage = () => {
  return (
    <AuthLayout>
      <SelectUserType />;
    </AuthLayout>
  );
};
