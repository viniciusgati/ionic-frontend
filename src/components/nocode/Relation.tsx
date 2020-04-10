import { trashBin } from 'ionicons/icons';
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

const Relation: React.FC = (props) => {
  const type = "belongs_to";

  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <IonLabel>Tipo de informacao</IonLabel>
          <IonSelect value={type} placeholder="Tipo">
            <IonSelectOption value="belongs_to">Pertence</IonSelectOption>
            <IonSelectOption value="has_many">Tem varios</IonSelectOption>
            <IonSelectOption value="has_and_belongs_to_many">Tem e pertece a varios</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Nome</IonLabel>
          <IonInput type="text" name="name" />
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

export default Relation;
