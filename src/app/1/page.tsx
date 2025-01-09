"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface CalculatorFormValues {
  values: number[] | null;
}

export default function Calculator() {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    register,
  } = useForm<CalculatorFormValues>({
    defaultValues: {
      values: null,
    },
    mode: "all",
  });

  // Number of input
  const valuesNo = 2;

  const [total, setTotal] = React.useState<number | null>(null);

  const onSubmit = (data: CalculatorFormValues) => {
    if (data?.values === null) {
      return;
    }

    setTotal(data?.values?.reduce((acc, val) => acc + val, 0));
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTotal(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors === Object(errors) ? Object.entries(errors) : []]);

  return (
    <div className="m-auto w-1/4 text-center">
      <p className="title">Adding {valuesNo} Numbers</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {Array.from({ length: valuesNo }).map((_, index) => (
          <div key={index} className="flex flex-col gap-1 ">
            <label className="text-left">Value {index + 1}</label>
            <input
              type="number"
              placeholder={`Enter a number`}
              {...register(`values.${index}`, {
                required: "This field is required",
                valueAsNumber: true,
                setValueAs: (value) => Number(value),
              })}
            />
            {Object.keys(errors).length > 0 && errors?.["values"]?.[index] && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {errors?.["values"]?.[index]?.["message"]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="btn-primary w-full self-center mt-3"
          disabled={Object.keys(errors).length > 0 || !watch("values")}
        >
          Add
        </button>
      </form>

      <div className="flex flex-col text-center mt-5">
        {!total || Object.keys(errors).length > 0 ? (
          <></>
        ) : (
          <p> Total is {total}</p>
        )}
      </div>
    </div>
  );
}
