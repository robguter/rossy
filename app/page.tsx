'use client'
import React from 'react';
import DessertCard from '@/components/DessertCard';
import { Dessert } from '@/types/dessert';
import { motion } from 'framer-motion';
import { ArrowRight, Cake, Heart, Truck } from 'lucide-react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { bebas } from "@/components/fonts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import ContactForm from '@/components/ContactForm';
import Link from "next/link";
import "@/public/styles/estilo.css"
import Carousel from '@/components/Carousel';

var lkmimail = "mailto:robguter114@gmail.com, robgutgom@hotmail.com";
var lkmigith = "https://github.com/robguter";
var imglogo = 'images/logo_pavlova.png'

// --- Datos Mock ---
const featuredDesserts: Dessert[] = [
  { 
    id: 1, name: 'Pavlova Clásica', description: 'La clásica con un toque de pasión y cremoso glaseado.', price: 9.50, imageUrl: 'images/pavlova.jpg', colorTheme: 'red' 
  },
  { 
    id: 2, name: 'Pavlova Corazón', description: 'Fresco y ligero, con un sabor que te transporta a la primavera.', price: 8.00, imageUrl: 'images/pavlovac.jpg', colorTheme: 'red' 
  },
  { 
    id: 3, name: 'Pavlova Chocolate', description: 'Intenso chocolate con explosión de frescura de frutos rojos.', price: 7.25, imageUrl: 'images/pavlovach.jpg', colorTheme: 'red' 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen ">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark/50 backdrop-blur-sm border-border">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
          <div className="flex justify-between items-center h-16">
            <div><img src={imglogo} className="opacity-50 text-white font-bold w-34 t-0 mt-17 ml-0" /></div>
            <div className="hidden md:flex space-x-8 ml-170">
              <a href="#about" className="text-white hover:text-foreground">
                  Acerca de
              </a>
              <a href="#products" className="text-white hover:text-foreground">
                  Productos
              </a>
              <a href="#contact" className="text-white hover:text-foreground">
                  Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: CABECERA Y CTA PRINCIPAL */}
      <header className="py-0 h-130 text-center mt-0">
        <Carousel />
        {/* Más contenido */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-0 txtsmb text-4xl font-extrabold text-white text-center mb-0 mt-5"
        >
          ¡El Capricho que tu día necesita!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="txtsmb text-xl text-white mb-0 mt-0"
        >
          Postres Artesanales con Ingredientes Frescos.
        </motion.p>

      </header>

              <label id="about"></label>
      {/* SECCIÓN 2: CARACTERÍSTICAS / BENEFICIOS */}
      <section className="py-0 mt-80">
        <section className="anima1">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl txtsmb font-bold text-white text-center mb-5"
            >
              Hecho con Pasión y Calidad
            </motion.h2>
            <div className="flex justify-center gap-12 text-center">
              {/* Beneficio 1 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-xs p-6 bg-rojo-pasion rounded-lg shadow-md border-t-4 border-white shadow-gris-texto shadow-2xl hover:shadow-xl"
              >
                <Heart className="w-10 h-10 text-white mx-auto mb-4 transition-transform duration-300 hover:scale-120" />
                <h3 className="text-xl txtsmb font-bold mb-2 text-white">Sabor Intenso</h3>
                <p className="text-white/65">Recetas que despiertan emociones fuertes en cada mordida.</p>
              </motion.div>
              {/* Beneficio 2 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-xs p-6 bg-rojo-pasion rounded-lg shadow-md border-t-4 border-white shadow-gris-texto shadow-2xl hover:shadow-xl"
              >
                <span className="text-5xl text-verde-fresco mb-4 block hover:rotate-45">🍃</span>
                <h3 className="text-xl txtsmb font-bold mb-2 text-white">Ingredientes Frescos</h3>
                <p className="text-white/65">Usamos solo productos de temporada para garantizar la calidad.</p>
              </motion.div>
              {/* Beneficio 3 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-xs p-6 bg-rojo-pasion rounded-lg shadow-md border-t-4 border-white shadow-gris-texto shadow-2xl hover:shadow-xl"
              >
                <span className="text-5xl text-gris-texto mb-4 block hover:translate-x-2">👨‍🍳</span>
                <h3 className="text-xl txtsmb font-bold mb-2 text-white">Elaboración Artesanal</h3>
                <p className="text-white/65">Hechos a mano, con el cuidado y la dedicación de un chef.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

              <label id="products"></label>
      {/* SECCIÓN 3: POSTRES DESTACADOS (Galería) */}
      <section id="menu" className="py-20">
        <section className="anima1">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl txtsmb font-bold text-white text-center mb-16"
            >
              Nuestras Estrellas del Sabor
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredDesserts.map(dessert => (
                <motion.div
                  key={dessert.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.06, boxShadow: "0 6px 14px #692abd22" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <DessertCard dessert={dessert} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-15 mb-33 px-4 sm:px-6 lg:px-8">
      <section className="anima1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl txtsmb font-bold text-center mb-12 text-white border-b ml-88 mr-88">Contactanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-gris-texto shadow-2xl hover:shadow-xl">
              <h3 className="text-3xl txtsmb font-bold text-center mb-12 text-white border-b ml-10 mr-10">Información de Contacto</h3>
              <div className="space-y-4 gap-8 pl-5">
                <Link href={lkmimail} target="Otro">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white gap-3" />
                    <span className="text-white">Correos</span>
                  </div>
                </Link><br/>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-white">+58 424 299 7367</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-white" />
                  <span className="text-white">Caracas, Venezuela</span>
                </div>
                <Link href={"https://www.linkedin.com/in/robert-gutierrez-06295946/"} target="Otro">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-white" />
                    <span className="text-white">Linkedin</span>
                  </div>
                </Link><br/>
                <Link href={lkmigith} target="Otro">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-white" />
                    <span className="text-white">Github</span>
                  </div>
                </Link><br/>
              </div>
            </Card>
            <Card className="shadow-gris-texto shadow-2xl hover:shadow-xl">
              <CardContent>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl txtsmb font-bold text-center mb-12 text-white border-b ml-35 mr-35">Email</h2>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </section>
      {/* SECCIÓN 4: ÚLTIMA LLAMADA A LA ACCIÓN (Refuerzo) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-rojo-pasion py-2 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-2">
          No esperes más para darte ese gusto inolvidable.
        </h2>
        <p className="text-xl text-white mb-2">
          Realiza tu pedido en menos de 5 minutos.
        </p>
        <motion.a 
          href="#order-form"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="border bg-gradient-to-t from-rojo-pasion to-rojo-oscuro shadow-xs text-white text-2xl font-bold py-1 px-10 rounded-full shadow-xl hover:bg-accent transition duration-300 transform hover:scale-105 inline-block dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
        >
          ¡Quiero Pedir Mis Postres Ya!
        </motion.a>
      </motion.section>

    </div>
  );
};

export default LandingPage;