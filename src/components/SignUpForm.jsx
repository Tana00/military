import React from "react";

const SignUpForm = ({ register, handleSubmit, errors, onSubmit, password }) => {
  return (
    <div className="flex h-full justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full"
      >
        <label className="flex flex-col">
          Full Name:
          <input
            {...register("fullName", { required: true })}
            className="p-2 border rounded"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
        </label>
        <label className="flex flex-col">
          Email Address:
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="p-2 border rounded"
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              Please enter a valid email address
            </p>
          )}
        </label>
        <label className="flex flex-col">
          Service Branch:
          <select
            {...register("serviceBranch", { required: true })}
            className="p-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="Army">Army</option>
            <option value="Navy">Navy</option>
            <option value="Airforce">Airforce</option>
          </select>
          {errors.serviceBranch && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
        </label>
        <label className="flex flex-col">
          Password:
          <input
            type="password"
            {...register("password", { required: true, minLength: 8 })}
            className="p-2 border rounded"
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              Password must be at least 8 characters
            </p>
          )}
        </label>
        <label className="flex flex-col">
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
            className="p-2 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">Passwords do not match</p>
          )}
        </label>
        <label className="flex flex-col ">
          <div className="flex items-center space-x-2">
            <input type="checkbox" {...register("terms", { required: true })} />
            <span>I agree to the terms and conditions</span>
          </div>

          {errors.terms && (
            <p className="text-sm text-red-500">
              You must agree to the terms and conditions
            </p>
          )}
        </label>
        <button
          type="submit"
          className="p-2 mt-5 bg-slate-800 text-white rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
