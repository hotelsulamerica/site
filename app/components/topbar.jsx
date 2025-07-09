import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
  return (
    <div className="flex py-2 px-16 text-sm text-gray-600 bg-gray-100">
      <div className="flex-1">
        <p>Bem vindo ao Hotel Sul América</p>
      </div>

      <div className="flex-1 text-right">
        <ul className="flex justify-end space-x-8">
          <li className="flex">
            <FontAwesomeIcon
              icon={faPhone}
              className="font-bold text-primary w-4 h-4 mr-2"
            />
            (35) 3332-3400
          </li>

          <li className="flex">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="font-bold text-primary w-4 h-4 mr-2"
            />
            (35) 98868-0724
          </li>

          <li className="flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="font-bold text-primary w-4 h-4 mr-2"
            />
            reservas@hotelsulamerica.com.br
          </li>
        </ul>
      </div>
    </div>
  );
}
