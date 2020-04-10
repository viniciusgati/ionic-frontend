import { add, trashBin } from 'ionicons/icons';
import {
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonInput,
  IonLabel,
  IonList,
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
  IonIcon,
  IonItemDivider
} from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

const Field: React.FC = (props) => {
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <IonLabel>Tipo de informacao</IonLabel>
          <IonSelect value="1" placeholder="Tipo">
            <IonSelectOption value="string">Texto Simples</IonSelectOption>
            <IonSelectOption value="text">Texto</IonSelectOption>
            <IonSelectOption value="data">Data</IonSelectOption>
            <IonSelectOption value="hora">Hora</IonSelectOption>
            <IonSelectOption value="timestamp">Data e hora</IonSelectOption>
            <IonSelectOption value="checkbox">Checkbox</IonSelectOption>
            <IonSelectOption value="radio">Radio</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Nome</IonLabel>
          <IonInput type="text" name="name" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Validacoes</IonLabel>
          <IonInput type="text" name="name" />
        </IonItem>

        <IonItem>
          <IonLabel>Indexar</IonLabel>
          <IonToggle value="indexed" disabled={false} />
        </IonItem>

        <IonItem>
          <IonLabel>Ordem</IonLabel>
          <IonInput type="number" name="order" />
        </IonItem>

        <IonItem>
          <IonIcon icon={trashBin}/>
        </IonItem>
      </IonCardContent>
    </IonCard>

  );
};

export default Field;
