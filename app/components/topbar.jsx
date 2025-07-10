import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function TopBar() {
  return (
    <div
      className="flex py-2 px-16 text-sm text-white bg-[#008C44] md:relative z-10"
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="flex-1 font-medium">
        <p>Bem vindo ao Hotel Sul América</p>
      </div>

      <div className="flex-1 md:text-right">
        <ul className="flex justify-end space-x-8">
          <Link href="phone:3533323400" target="_blank">
            <li className="flex font-medium">
              <FontAwesomeIcon
                icon={faPhone}
                className="font-bold text-primary w-4 h-4 mr-2 text-white"
              />
              (35) 3332-3400
            </li>
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=5535988680724&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20Sul%20Am%C3%A9rica" target="_blank">
            <li className="flex font-medium">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="font-bold text-primary w-4 h-4 mr-2 text-white"
              />
              (35) 98868-0724
            </li>
          </Link>

          <Link href={"mailto:reservas@hotelsulamerica.com.br"} target="_blank">
            <li className="flex font-medium">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="font-bold text-primary w-4 h-4 mr-2 text-white"
              />
              reservas@hotelsulamerica.com.br
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
