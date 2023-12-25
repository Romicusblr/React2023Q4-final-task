import LanguageToggle from '@/components/LanguageToggle';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '@/context/LocalizationContext';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/slices/userSlice';

const Header = () => {
  const user = useAppSelector(selectUser);

  const { strings } = useLocalization();

  return (
    <header className="px-2 flex items-center justify-between bg-gray-800">
      <a href="/" className="uppercase font-bold text-gray-400">
        GraphiQL
      </a>
      <nav>
        <ul className="font-semibold text-gray-400">
          <li className="inline-block py-3 px-2">
            <LanguageToggle />
          </li>
          {user ? (
            <>
              <li className="inline-block py-3 px-2">
                {strings.welcomeTitle}, {user.name}
              </li>
              <li className="inline-block py-3 px-2 hover:text-gray-600">
                <NavLink to={'/logout'}>{strings.logoutTitle}</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="inline-block py-3 px-2 hover:text-gray-600">
                <NavLink to={'/login'}>{strings.loginTitle}</NavLink>
              </li>
              <li className="inline-block py-3 px-2 hover:text-gray-600">
                <NavLink to={'/register'}>{strings.registerTitle}</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
