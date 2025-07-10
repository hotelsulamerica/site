import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function TopBar() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between py-2 px-16 text-sm text-white bg-[#008C44] md:relative z-10"
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="flex-1 font-medium mb-2 md:mb-0 text-center md:text-left">
        <p>Bem vindo ao Hotel Sul América</p>
      </div>

      <div className="flex-1 text-center md:text-right">
        <ul className="flex flex-col text-center md:flex-row md:justify-end md:space-x-8 md:space-y-0 space-y-2">
          <Link href="phone:3533323400" target="_blank">
            <li className="flex justify-center md:justify-start font-medium hover:text-[#FFDF82] transition-colors">
              <FontAwesomeIcon
                icon={faPhone}
                className="font-bold text-primary w-4 h-4 mr-2"
              />
              (35) 3332-3400
            </li>
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=5535988680724&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20Sul%20Am%C3%A9rica"
            target="_blank"
          >
            <li className="flex justify-center md:justify-start font-medium hover:text-[#FFDF82] transition-colors">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="font-bold text-primary w-4 h-4 mr-2"
              />
              (35) 98868-0724
            </li>
          </Link>

          <Link href="mailto:reservas@hotelsulamerica.com.br" target="_blank">
            <li className="flex justify-center md:justify-start font-medium hover:text-[#FFDF82] transition-colors">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="font-bold text-primary w-4 h-4 mr-2"
              />
              reservas@hotelsulamerica.com.br
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
