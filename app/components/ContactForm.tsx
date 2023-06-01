"use client";
import React from "react";
import BasicModal from "./BasicModal";
import PrimaryButton from "./PrimaryButton";
import Spinner from "./Spinner";
import { useHeliosForms } from "../hooks/useHeliosForms";

export default function ContactForm() {
  const {
    register,
    handleMutationSubmit,
    handleSubmit,
    errors,
    isModalOpen,
    setIsModalOpen,
    formSubmissionMutation,
    language,
    formRef,
  } = useHeliosForms("contact");

  return (
    <form
      onSubmit={handleSubmit(handleMutationSubmit)}
      className="max-w-sm md:max-w-xl mx-auto p-0 m-0"
      ref={formRef}
    >
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 before:content-['*']"
        >
          {language === "en" ? "Full Name" : "Adınız-Soyadınız"}
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3"
        />
        {errors.fullName && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
           {language === "en"
              ? "Your full name cannot be empty and cannot contain any numeric characters"
              : "Bu alan boş bırakılamaz ve herhangi bir numerik karakter içeremez"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 before:content-['*']"
        >
          {language === "en" ? "Email" : "Email Adresiniz"}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3"
        />
        {errors.email && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en" ? errors.email.message : "Geçersiz email"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 before:content-['*']"
        >
          {language === "en" ? "Phone Number" : "Telefon Numaranız"}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3"
        />
        {errors.phone && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "Your contact number must be at least 10 digits"
              : "Telefon numaranız en az 10 numerik karakterden oluşmalı"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="question"
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 before:content-['*']"
        >
          {language === "en" ? "Question" : "Sorunuz"}
        </label>
        <textarea
          id="question"
          rows={5}
          {...register("question")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3"
        />
        {errors.question && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? errors.question.message?.replace(
                  "String",
                  "Your question/inquiry"
                )
              : "Sorunuz/talebiniz en az 50 karakter uzunluğunda olmalı"}
          </p>
        )}
      </div>
      {formSubmissionMutation.isLoading ? (
        <Spinner />
      ) : (
        <PrimaryButton
          type="submit"
          label={{ en: "Submit", tr: "Gönder" }}
          className="w-full"
        />
      )}
      <BasicModal
        open={isModalOpen}
        header={{ success: "🥳", failure: "😞" }}
        onClose={() => setIsModalOpen(false)}
        formStatus={formSubmissionMutation.data?.status}
        output={
          language === "en"
            ? {
                success:
                  "Your form has been submitted succesfully!\nWe will be in touch shortly.",
                failure:
                  "There was an error submitting your form.\nPlease try again later...",
              }
            : {
                success:
                  "Formunuz bize ulaştı!\nEn kısa sürede size geri dönüş sağlayacağız.",
                failure:
                  "Maalesef formunuzu gönderirken bir hata oluştu.\nLütfen daha sonra tekrar deneyiniz...",
              }
        }
      />
    </form>
  );
}
