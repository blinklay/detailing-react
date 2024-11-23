export default function FooterList() {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4 border-b-2 p-2 border-accent">
        <img className="w-7" src="./icons/phone.png" alt="phone icon" />

        <div>
          <h4>Связаться с нами</h4>
          <div className="mt-2">
            <a className="text-accent underline" href="telto:+79160919490">
              +79160919490
            </a>
            <p className="text-[16px]">Антон - записаться на услуги</p>
          </div>
        </div>
      </li>

      <li className="flex items-center gap-4 border-b-2 p-2 border-accent">
        <img className="w-7" src="./icons/suitcase.png" alt="phone icon" />

        <div>
          <h4>Информация</h4>
          <div className="mt-2 max-w-[200px] text-[16px]">
            ЗАО «121596 Москва, Можайское ш.,вл 165Б» пн-сб с 9.00 до 22.00
          </div>
        </div>
      </li>
    </ul>
  );
}
