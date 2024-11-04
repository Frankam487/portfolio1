import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


function Formm() {
const form = useForm();
const {register, control, handleSubmit, errors} = form;
const data ={};
const onSubmit = (e) => {
  data = {
    prenom: e.name,
    nom: e.surname,
    subject: e.subject,
    message: e.textarea
  }
  axios.post("http://localhost:2001/user", data)
}
  
      
    
  
  
  
  return (
    <>
      <div className="form">

        <div className="text">
          <h2 className="text-blue-400 font-semibold">Me Contacter</h2>
          <h1 className="text-blue-900 font-extrabold text-3xl">Get in Touch</h1>
        </div>
        <div className="form-container ">
        
          <div className="form-content" onSubmit={handleSubmit(onSubmit)}>
          <form className="py-6 w-full rounded-sm ">
            <div className="flex justify-between gap-4 ">
              <div className="flex-1">
                <input id="surname"
                {...register("surname", {minLength: 5})}
                  type="text"
                  
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Entrez votre prenom"
                />
                {errors && <p style={{color: 'red'}}>erreur</p>}
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Entrez votre nom"
                />
              </div>
            </div>

            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="p-2 my-2 border border-gray-300 rounded w-full"
              placeholder="Sujet"
            />

            <textarea
              id="textarea"
              {...register("textarea")}
              className="p-2 my-2 border border-gray-300 rounded w-full"
              rows="4"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-50"
            >
              Soumettre
            </button>
          </form>
          </div>
          <div className="contact-container ">
            <div className=" m-2 flex items-center  ml-12">
              <img
                src="../../public/fr.jpg"
                alt=""
                className="w-2 p-7 h-2  rounded-full bg-blue-500"
              />
              <div className="flex flex-col ml-7 justify-start w-full">
                <h3 className="font-bold font-arial">Call Me</h3>
                <span className="text-start">690-461-830</span>
                <span className="">677-331-000</span>
              </div>
            </div>
            <div className="email-container flex items-center  ml-12 ">
              <img
                src="."
                alt=""
                className="w-2 p-7 h-2  rounded-full bg-blue-500"
              />
              <div className=" email flex flex-col ml-7 justify-start w-full">
                <h3 className="font-Arial text-start font-bold text-lg">
                  E-mail
                </h3>
                <span className="text-start">fkamgang06@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center  m-3 ml-12 ">
              <img
                src="."
                alt=""
                className="w-2 p-7 h-2 rounded-full bg-blue-500"
              />
              <div className="flex flex-col ml-7 justify-start w-full">
                <h3 className="font-bold">Call Me</h3>
                <span className="text-start">201-354-4443</span>
                <span>201-354-4443</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formm;
