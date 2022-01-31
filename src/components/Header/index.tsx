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

          <Li variant={selectTab === 'collection' ? 'active' : null}> 
            <span>
              <MdDashboard size={20} color='var(--white)' />
              <p>Collection</p>
            </span>
          </Li>
        </ul>
      </Nav>

      <Image src='https://github.com/oleandrosiq.png' alt='Image Profile' />
    </Container>
  );
}