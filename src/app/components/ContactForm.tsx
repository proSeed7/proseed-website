// This example uses `@web3forms/react` plugin and tailwindcss for css styling
'use client'

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm({className, translations}) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState<string>("");
    
    // Please update the Access Key in the .env
    const apiKey = process.env.NEXT_PUBLIC_PUBLIC_ACCESS_KEY;

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
            from_name: "Proseed Website",
            subject: "Neue Kontaktnachricht von Ihrer Website",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(translations.success);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(translations.fail);
        },
    });

    return (
        <div className={`${className}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="checkbox"
                    id=""
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}></input>

                <div className="mb-5">
                    <input
                        type="text"
                        placeholder={translations.name}
                        autoComplete="false"
                        className={`w-full px-4 py-3 border-2 border-green bg-form text-form placeholder:text-form-placeholder rounded-md outline-none focus:ring-4 ${
                            errors.name
                                ? "border-red-600 focus:border-red-600 ring-red-100"
                                : "border-gray-300 focus:border-gray-600 ring-gray-100"
                        }`}
                        {...register("name", {
                            required: translations.nameError,
                            maxLength: 80,
                        })}
                    />
                    {errors.name && (
                        <div className="mt-1 text-red-600">
                            <small>{errors.name.message as string}</small>
                        </div>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email_address" className="sr-only">
                        {translations.email}
                    </label>
                    <input
                        id="email_address"
                        type="email"
                        placeholder={translations.email}
                        name="email"
                        autoComplete="false"
                        className={`w-full px-4 py-3 border-2 border-green bg-form text-form placeholder:text-form-placeholder rounded-md outline-none focus:ring-4  ${
                            errors.email
                                ? "border-red-600 focus:border-red-600 ring-red-100"
                                : "border-gray-300 focus:border-gray-600 ring-gray-100"
                        }`}
                        {...register("email", {
                            required: translations.emailError,
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: translations.emailValidation,
                            },
                        })}
                    />
                    {errors.email && (
                        <div className="mt-1 text-red-600">
                            <small>{errors.email.message as string}</small>
                        </div>
                    )}
                </div>

                <div className="mb-3">
          <textarea
              name="message"
              placeholder={translations.message}
              className={`w-full px-4 py-3 border-2 border-green bg-form text-form placeholder:text-form-placeholder rounded-md outline-none min-h-16 h-36 focus:ring-4  ${
                  errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
              }`}
              {...register("message", {
                  required: translations.messageError,
              })}
          />
                    {errors.message && (
                        <div className="mt-1 text-red-600">
                            {" "}
                            <small>{errors.message.message as string}</small>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-4 font-semibold transition-colors text-button bg-button rounded-md hover:text-button-hover hover:bg-button-hover focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
                    {isSubmitting ? (
                        <svg
                            className="w-5 h-5 mx-auto text-default-inverted animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        translations.sendBtn
                    )}
                </button>
            </form>
            <div className="mt-6">
                {isSubmitSuccessful && isSuccess && (
                    <div className="mt-3 text-sm text-center text-green-500">
                        {message || translations.success}
                    </div>
                )}
                {isSubmitSuccessful && !isSuccess && (
                    <div className="mt-3 text-sm text-center text-red-500">
                        {message || translations.fail}
                    </div>
                )}
            </div>
        </div>
    );
}
