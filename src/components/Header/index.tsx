import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';

import { Container, Nav, Li, Image } from './styles';

export function Header() {
  const { pathname } = useRouter();
  const selectTab = pathname.split('/')[1];

  return (
    <Container>
      <Nav>
        <ul>
          <Link href='/dashboard' passHref>
            <Li variant={selectTab === 'dashboard' ? 'active' : null}> 
              <span>
                <MdDashboard size={20} color='var(--white)' />
                <p>Dashboard</p>
              </span>
            </Li>
          </Link>
        </ul>
      </Nav>

      <Image src='https://super.abril.com.br/wp-content/uploads/2018/07/5672f6af82bee174ca03d239thinkstockphotos-153831740.jpeg' alt='Image Profile' />
    </Container>
  );
}