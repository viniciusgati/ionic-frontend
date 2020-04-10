import { add } from 'ionicons/icons';
import {
    IonItem,
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    IonCardContent, 
    IonButtons, 
    IonContent,
    IonHeader,
    IonMenuButton, 
    IonPage, 
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';

const EntitiesListPage: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Entidades</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Agenda de atendimento</IonCardSubtitle>
            <IonCardTitle>Agenda</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Contatos com clientes de sua carteira

            <IonItem routerLink="/nocode/Entity/1" routerDirection="none" lines="none" detail={false}></IonItem>
          </IonCardContent>
        </IonCard>

          
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Oportunidades de neg'ocios</IonCardSubtitle>
            <IonCardTitle>Oportunidades</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Possiveis oportunidades de vendas em negocicao com clientes
          </IonCardContent>
        </IonCard>


        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default EntitiesListPage;
