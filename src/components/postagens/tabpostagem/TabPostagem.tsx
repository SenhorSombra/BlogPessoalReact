import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static">
          <Tabs className="coloracao2" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="coloracao2"  label="Todas as postagens" value="1" />
            <Tab className="coloracao2"  label="Sobre Mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center">
            Sobre mim
          </Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" >
            Olá meu Nome é Vagner eu sou aqui de São Paulo e eu tenho 26 anos,
            trabalhei como ajudante geral desde os 19 até o ano passado quando sai.
            Trabalhar na minha ultima empresa me agregou diversos tipos conhecimento: como eu trabalhava no setor de acabamento gerenciamento de tempo e trabalho em equipe eram necessários todos os dias. No meu tempo livre eu gosto de praticar esportes: como ciclismo, luta, também programar e jogar videogame. Me interessei pelo área de tecnologia quando estava no ensino médio e ingressei na faculdade após terminar, Estudei na Analise e Desenvolvimento de Sistemas na UNIP porem não completei a faculdade, pretendo terminar o curso e estou a procura da minha primeira oportunidade de trabalho em tecnologia, acredito que tenho potencial para aprender cada vez mais e desde já agradeço seu tempo em me conhecerem</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;