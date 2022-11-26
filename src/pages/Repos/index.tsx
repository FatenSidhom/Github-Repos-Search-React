import { Header } from '../../components/Header';
import { Main } from '../../components/Repos/Main';

import { Container, PageContainer } from './styles';

import { RiGitRepositoryLine } from 'react-icons/ri';

export function Repos() {
    return (
        <Container>
            <PageContainer>
                <Header directory={"repositores"} icon={<RiGitRepositoryLine className="header-icon" />} />
                <Main />
            </PageContainer>
        </Container>
    );
}