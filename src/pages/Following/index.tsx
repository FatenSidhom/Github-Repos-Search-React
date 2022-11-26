import { useUser } from '../../hooks/useUser';

import { Header } from '../../components/Header';
import { Main } from '../../components/Follow/Main';

import { Container, PageContainer } from './styles';

import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

export function Following() {
    const { following, acessUserFollow } = useUser();

    return (
        <Container>
            <PageContainer>
                <Header
                    directory={"following"}
                    icon={<FaUserFriends className="header-icon" />}
                />
                <Main
                    profileIcon={<CgProfile size={20} />}
                    follow={following}
                    acessUser={acessUserFollow}
                    page={"following"}
                />
            </PageContainer>
        </Container>
    );
}