import { Button, Text } from '@sura/ui-web';
import BgAuth from '../assets/images/bg-auth.png';
import IconMail from '../../public/icons/mail-auth.svg'

export default function Root() {
  return (
    <div>
      <div className="relative h-[500px]">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-white to-transparent" />
        <img src={BgAuth} alt="" className="w-full h-full object-cover" />

        <div className="p-5">
          <Text variant="heading">Bienvenido</Text>
          <Text>
            Si aun no tienes
            <br />
            una cuenta debes registrarte
          </Text>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <Button variant="social">
            <span className="flex justify-center items-center">
              <img src="/icons/mail-auth.svg" alt="" />
              <span className="block font-medium ml-2 text-lg">
                Registrarte con email
              </span>
            </span>
          </Button>
          <Button variant="social">
            <span className="flex justify-center items-center">
              <img src="/icons/google-auth.svg" alt="" />
              <span className="block font-medium ml-2 text-lg">
                Registrarte con Google
              </span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
