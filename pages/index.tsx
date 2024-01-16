import axios from "axios";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../src/layouts/Layout";
import Timeline from "../src/ui/Timeline";
import { HeartIcon } from "@heroicons/react/24/outline";

const timelineItems = [
  {
    time: "13:00",
    header: "Türöffnung Gulfhof Fahnhusen für alle Gäste",
    text: "Anreise für Gäste, welche im Gulfhof Fahnhusen schlafen: ab 23.08.24 13:00 Uhr möglich.",
    icon: "✨"
  },
  {
    time: "Uhrzeit offen",
    noTimeSuffix: true,
    header: "Freie Trauung",
    text: "Im Garten hinter dem Gulfhof",
    icon: "👰‍♀️🤵‍♂️"
  },
  {
    time: "ca 15:00",
    header: "Sektempfang",
    text: "",
    icon: "🥂"
  },
  {
    time: "ca 17:00",
    header: "Gruppenfotos",
    text: "",
    icon: "📸"
  },
  {
    time: "ca 18:00",
    header: "Abendessen",
    text: "",
    icon: "🍽"
  },
  {
    time: "ca 21:00",
    header: "Eröffnung Tanzfläche",
    text: "",
    icon: "💃"
  },
  {
    time: "ca 00:00",
    header: "Mitternachtssnack",
    text: "",
    icon: "🥨"
  },
  {
    time: "",
    noTimeSuffix: true,
    header: "Open End!",
    text: "",
    icon: "🎉"
  }
];

const faqs = [
  {
    id: 1,
    question: "Gibt es einen Dresscode?",
    answer: "Jeder soll sich wohlfühlen. Nur bitte verzichtet auf die Farbe rot."
  },
  {
    id: 2,
    question: "Können wir unsere Kinder mitnehmen?",
    answer:
      "Bitte gebt uns Bescheid, ob ihr eure Kinder mitbringen möchtet.\n(Wie alt sind eure Kinder, damit wir mit der Location genügend und passende Sitzmöglichkeit planen können)"
  },
  {
    id: 3,
    question: "Gibt es besondere Wünsche für Geschenke?",
    answer:
      "Gerne freuen wir uns auf einen Zuschuss für unsere Honeymoon Reise."
  },
  {
    id: 4,
    question: "Sind Hunde erlaubt?",
    answer:
      "Wir lieben eure Vierbeiner, jedoch bitten wir euch eure Hunde an diesem Tag nicht mitzunehmen."
  },
  {
    id: 5,
    question:
      "Ich hätte eine Idee für eine Aktion auf der Hochzeit—an wen wende ich mich?",
    answer:
      "Um es optimal in den Tagesablauf einzuplanen wendet euch bitte an die Trauzeugen und klärt es mit ihnen ab. Auf Spiele ist bitte zu verzichten."
  }
];

const trauzeugen = [
  {
    name: "Catharina Janssen",
    phone: "+49 176 72201682",
    mail: "",
    imageUrl: "/trauzeugen/catharina.png"
  },
  {
    name: "Daniel Dahlke",
    phone: "+49 176 21178924",
    mail: "",
    imageUrl: "/trauzeugen/daniel.png"
  }
];
export default function Index() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    defaultValues: {
      Name: "",
      Email: "",
      Telefon: "",
      Personen: 2,
      RSVP: "Y",
      Nachricht: "",
      Sent: new Date().toISOString()
    }
  });

  // useEffect(() => {
  //   const { submissionId, submitted } = localStorage;
  //   console.log("submissionId", submissionId);
  //   console.log("submitted", submitted);
  // }, []);

  const onSubmit = async (data: any) => {
    if (loading || error) {
      return;
    }
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(
        "https://app.sheetlabs.com/ANDA/submissions",
        [data],
        { headers: { "Content-Type": "application/json" } }
      );
      setSuccessfullySubmitted(true);
      console.log("returning", responseData);
    } catch (err: any) {
      console.log("err", err);
      setError("Fehler beim Absenden des Formulars 🥲");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <article
        id="home"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 text-center"
      >
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            <span className="">Wir sagen JA,</span>
          </h1>
          <p className="text-xl text-gray-800 sm:text-2xl lg:text-3xl">
            vor den Augen unserer Liebsten.
          </p>
          <div className="mt-10">
            <p>Wi wüllt uns temlich freuen, wenn ji to uns Hochtiet kummt.</p>
            <p>
              Wir würden uns sehr freuen, wenn ihr zu unserer Hochzeit kommt.
            </p>
          </div>
        </div>
      </article>

      <article
        id="tagesablauf"
        className="bg-orange-50 p-10 pb-60 md:px-20 lg:px-40 xl:px-80 relative overflow-hidden"
        style={{ paddingBottom: "32rem" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">24.08.2024</div>
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
            Tagesablauf
          </h2>

          <Timeline items={timelineItems} />
        </div>
      </article>

      <article
        id="ort"
        className="w-full mx-auto max-w-7xl py-0 md:pb-32 px-10 -translate-y-80"
      >
        <div className=" mt-20">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
            Location
          </h2>
          <div className=" border-b border-gray-200 shadow-lg rounded-lg bg-white md:h-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="h-96 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251997.5479445861!2d7.735524666128221!3d53.63451438472517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6633e28f333e3%3A0xba597f146ea3a019!2sGulfhof%20Fahnhusen!5e0!3m2!1sen!2sus!4v1705238620922!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="h-full p-10 bg-gray-50">
              <p className="font-bold">Gulfhof Fahnhusen</p>
              <p>Fahnhusener Straße 41</p>
              <p>26409 Wittmund</p>
              <p>Mail: info@gulfhof-fahnhusen.de</p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://gulfhof-fahnhusen.de/"
                >
                  https://gulfhof-fahnhusen.de/
                </a>
              </p>

              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

              <section className="mt-4">
                <p className="font-bold">Schlafmöglichkeiten</p>
                <p>
                  Es gibt eine begrenzte Anzahl an Schlafplätzen direkt in der
                  Location. Insgesamt stehen 14 moderne Apartments mit 33
                  Schlafplätzen zur Verfügung. Für Frühstück wird von uns
                  gesorgt, aber es handelt sich um KEIN Hotel und nur am Samstag
                  gibt es Catering.
                </p>
                <br />
                <p>
                  Dieser einmalige Service richtet sich an die "Nachtschwärmer"
                  unter Euch. Für die Übernachtung müsst ihr €35 pro Nacht und
                  Person "berappen". Für diejenigen unter Euch, die lieber in
                  einem Hotel übernachten, sprechen wir gerne Empfehlungen aus!
                </p>
              </section>

              <section className="mt-4">
                <p className="font-bold">Taxi</p>
                <p>Die gängigen der Gegend:</p>
                <p>- Taxi Ahlers: 04461 / 3030</p>
                <p>- Taxi Ottis: 04462 / 922999</p>
                <br />
                <p>(Uber gibts auf dem Land nicht)</p>
              </section>

              <section className="mt-4">
                <p className="font-bold">Parkplätze</p>

                <p>Parkplatze sind auf dem Gelände vorhanden.</p>
              </section>

              <section className="mt-4">
                <p className="font-bold">Hotels in der Nähe:</p>

                <p>- Friesen Hotel Jever Doppelzimmer ab 105€ die Nacht inkl. Frühstück</p>
                <p>- Park Hotel Jever ab 150€ die Nacht inkl. Frühstück</p>
                <br />
                <p>(Preisstand Dezember 2023)</p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <article
        id="trauzeugen"
        className="mx-auto max-w-7xl px-10 sm:px-10 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
          Unsere Trauzeugen
        </h2>

        <div className="lg:col-span-2">
          <ul
            role="list"
            className="sm:grid sm:grid-cols-2 gap-x-12 gap-y-8 sm:space-y-0 px-4"
          >
            {trauzeugen.map((person, index) => (
              <li
                key={person.name}
                className={classNames(
                  index % 2 === 0 && "text-right flex-row-reverse -mr-8 z-10",
                  "flex items-center gap-8 -ml-8 mb-8 sm:mb-0"
                )}
              >
                <img
                  className="h-32 w-32 sm:h-40 sm:w-40 rounded-full"
                  src={person.imageUrl}
                  alt={person.name}
                  loading="lazy"
                />
                <div className="font-medium">
                  <h3 className="text-xl">{person.name}</h3>
                  <p className="text-orange-600">{person.phone}</p>
                  <p className="text-indigo-600">{person.mail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article
        id="rsvp"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-10">
          Rückmeldung
        </h2>
        <div className="border-b border-gray-200 bg-gray-50 shadow-lg rounded-lg md:h-full overflow-hidden relative">
          <form
            onSubmit={handleSubmit(onSubmit, console.error)}
            className={classNames(
              "relative",
              successfullySubmitted && "opacity-30 pointer-events-none"
            )}
          >
            {/* <input type="hidden" {...register("__id")}></input> */}
            <div className="space-y-6 py-6 px-4 sm:p-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Wir freuen uns über eine Rückmeldung über das unten stehende
                  Formular bis zum <strong>30. April 2024</strong>!
                </h3>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Alternativ könnt ihr Rückmeldung geben über Telefon/Whatsapp
                  unter +49 176 727 92903.
                </h3>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* radio buttons */}
                <div className="mt-4 space-y-4 flex justify-center col-span-12 mb-5">
                  <div className="flex gap-10">
                    <div className="flex items-center gap-1">
                      <input
                        {...register("RSVP", { required: "Pflichtfeld" })}
                        id="RSVP_yes"
                        type="radio"
                        value="Y"
                        className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="RSVP_yes" className="ml-3">
                        <span className="block text-xl font-bold text-gray-700">
                          Ich/Wir sagen zu
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center gap-1">
                      <input
                        {...register("RSVP", { required: "Pflichtfeld" })}
                        id="RSVP_no"
                        type="radio"
                        value="N"
                        className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="RSVP_no" className="ml-3">
                        <span className="block text-xl font-bold text-gray-700">
                          Ich/Wir können leider nicht kommen
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name(n)
                  </label>
                  {formState.errors.Name?.message && (
                    <div className="absolute right-0 top-0 text-sm text-red-500">
                      {formState.errors.Name?.message}
                    </div>
                  )}

                  <input
                    {...register("Name", { required: "Pflichtfeld" })}
                    type="text"
                    id="Name"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 relative">
                  <label
                    htmlFor="Personen"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Anzahl Personen
                  </label>
                  {formState.errors.Personen?.message && (
                    <div className="absolute right-0 top-0 text-sm text-red-500">
                      {formState.errors.Personen?.message}
                    </div>
                  )}
                  <input
                    {...register("Personen", {
                      required: "Pflichtfeld",
                      valueAsNumber: true
                    })}
                    type="number"
                    id="Personen"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 relative">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  {formState.errors.Email?.message && (
                    <div className="absolute right-0 top-0 text-sm text-red-500">
                      {formState.errors.Email?.message}
                    </div>
                  )}
                  <input
                    {...register("Email", { required: "Pflichtfeld" })}
                    type="text"
                    id="Email"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 relative">
                  <label
                    htmlFor="Telefon"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  {formState.errors.Telefon?.message && (
                    <div className="absolute right-0 top-0 text-sm text-red-500">
                      {formState.errors.Telefon?.message}
                    </div>
                  )}
                  <input
                    {...register("Telefon", { required: true })}
                    type="text"
                    id="Telefon"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* <div className="mt-6 -mb-2 col-span-12">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Es wird ein riesen BBQ geben mit grosser Auswahl. Bitte gebt
                    doch an, was ihr zum Essen mögt.
                  </h3>
                  <h3 className="text-lg font-bold leading-6 text-gray-900">
                    Gerne auch mehrere Sachen pro Person!
                  </h3>
                </div> */}

                {/* <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Fleisch"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fleisch 🍗
                  </label>
                  <input
                    {...register("Fleisch", { required: true })}
                    type="number"
                    id="Fleisch"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Fisch"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fisch 🐟
                  </label>
                  <input
                    {...register("Fisch", { required: true })}
                    type="number"
                    id="Fisch"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Vegetarisch"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vegetarisch 🧀
                  </label>
                  <input
                    {...register("Vegetarisch", { required: true })}
                    type="number"
                    id="Vegetarisch"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Vegan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vegan 🥕
                  </label>
                  <input
                    {...register("Vegan", { required: true })}
                    type="number"
                    id="Vegan"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div> */}

                {/* <div className="col-span-12 sm:col-span-9">
                  <label
                    htmlFor="Nachricht"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nachricht (optional)
                  </label>
                  <textarea
                    {...register("Nachricht")}
                    id="Nachricht"
                    rows={5}
                    placeholder="z.B. Allergien order Unverträglichkeiten"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div> */}
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                disabled={loading || !formState.isValid || !!error}
                className={classNames(
                  loading || !formState.isValid
                    ? "opacity-50 pointer-events-none"
                    : "",
                  "w-full bg-orange-400 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm cursor-pointer hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                )}
              >
                Abschicken
              </button>
              <div className="mt-2 text-sm text-gray-400 text-left">
                Hinweis: Bei Änderungen gerne das Formular erneut abschicken.
                Das zuletzt eingetroffene wird beachtet.
              </div>
            </div>
          </form>
          {successfullySubmitted && (
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 z-10">
              <div className="space-y-6 bg-white py-20 px-5 sm:p-6 text-center bg-orange-100 shadow-lg rounded-lg">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  <p>Vielen lieben Dank für eure Rückmeldung 🥰</p>
                  <br />
                  Sie kam erfolgreich bei uns an.
                </h2>
              </div>
            </div>
          )}
          {error && (
            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
              <h2 className="text-lg font-bold leading-6 text-red-500">
                Beim Abschicken gab es leider einen Fehler.
                <br />
                Informiere am besten gleich Simon über Whatsapp was da los ist.
                🙈
              </h2>
            </div>
          )}
        </div>
      </article>

      <article
        id="faq"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-10">
          Fragen & Antworten
        </h2>
        <div className="">
          <div className="mx-auto max-w-7xl divide-y divide-gray-200 pt-0 lg:pt-4 py-12 px0 lg:py-16 lg:px-8">
            <div className="mt-8">
              <dl className="divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                  >
                    <dt className="text-base font-medium text-gray-900 md:col-span-5">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 md:col-span-7 md:mt-0">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </article>
      <div className="mx-auto max-w-7xl -translate-y-80 flex justify-center">
        <HeartIcon className="h-8 w-8 stroke-1" />
      </div>
    </Layout>
  );
}
