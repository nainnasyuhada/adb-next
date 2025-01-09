"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface TwoSumFormValues {
  numberList: string;
  target: number | null;
}

export default function TwoSum() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TwoSumFormValues>({
    defaultValues: {
      numberList: "",
      target: null,
    },
    mode: "all",
  });

  const [output, setOutput] = React.useState<number[][] | null>(null);

  // Number of input
  const onSubmit = (data: TwoSumFormValues) => {
    const { numberList, target } = data;

    // convert user input into array of numbers
    if (numberList && target) {
      const arrayNo = numberList?.split(",").map((num) => Number(num));

      // const sortedArray = arrayNo.sort((a, b) => a - b);

      const result: number[][] = [];

      arrayNo.forEach((number) => {
        const remainingNumber = target - number;
        if (arrayNo.includes(remainingNumber)) {
          result.push([
            arrayNo.indexOf(number),
            arrayNo.indexOf(remainingNumber),
          ]);
        }
      });

      setOutput(result);
    }
  };

  return (
    <div className="m-auto w-1/4 text-center">
      <p className="title">Input Values</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="numberList" className="text-left">
            Array of Numbers
          </label>
          <input
            className=""
            type="text"
            placeholder="Enter array of numbers"
            id="numberList"
            {...register("numberList", {
              required: "This field is required",
              pattern: {
                value: /^[0-9,]*$/,
                message: "Input must contain only numbers and commas",
              },
            })}
          />
          {errors.numberList && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.numberList.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  gap-1">
          <label htmlFor="target" className="text-left">
            Target
          </label>

          <input
            className=" "
            type="number"
            placeholder="Enter target number"
            id="target"
            {...register("target", { valueAsNumber: true })}
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full self-center mt-3"
          disabled={
            !watch("numberList") ||
            !watch("target") ||
            Object.keys(errors).length > 0
          }
        >
          Find Index
        </button>
      </form>

      <div className="flex flex-col text-center mt-5">
        {!output ? (
          <></>
        ) : output.length > 0 ? (
          <>
            {output.map((item) => (
              <div key={item.join(",")}>[{item.join(", ")}]</div>
            ))}
          </>
        ) : (
          <div>No result found</div>
        )}
      </div>
    </div>
  );
}
