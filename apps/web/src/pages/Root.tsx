import BgAuth from '../assets/images/bg-auth.png';
import { Text } from '@sura/ui-web';

export default function Root() {
  return (
    <div>
      <div className="relative h-[600px]">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-white to-transparent" />
        <img src={BgAuth} alt="" className="w-full h-full object-cover" />

        <div className="p-5">
          <Text className="font-bold text-4xl">Bienvenido</Text>
          <Text>
            Si aun no tienes
            <br />
            una cuenta debes registrarte
          </Text>
        </div>
      </div>
    </div>
  );
}
