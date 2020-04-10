import { add, clipboard, shareSocial } from 'ionicons/icons';
import {
  IonIcon,
  IonTextarea,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
  IonButtons, 
  IonContent,
  IonHeader,
  IonMenuButton, 
  IonPage, 
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonCard,
  IonModal,
  IonButton,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonFooter
} from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Field from '../../components/nocode/Field';
import Relation from '../../components/nocode/Relation';

const Entity: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [name, setName] = useState<String>();
  const [description, setDescription] = useState<String>();
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Entidade: {name} {description}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonList>
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput type="text" name="name" onIonChange={e => setName(e.detail.value!)}/>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Descricao</IonLabel>
            <IonInput type="text" name="description" onIonChange={e => setDescription(e.detail.value!)} />
          </IonItem>

          <IonItemDivider>Documentacao</IonItemDivider>
          <IonItem>
            <IonTextarea rows={6} cols={20} placeholder="Descricao completa do motivo e utilizacao desta entidade" >                    
            </IonTextarea>
          </IonItem>

          <IonItemDivider>Campos e Relacionamentos</IonItemDivider>
          <Field></Field>
          <Relation></Relation>
          <Field></Field>
          <Relation></Relation>

          <IonModal isOpen={showModal}>
            <IonContent>
            <IonRow>
              <IonCol>
                <IonButton onClick={() => setShowModal(false)}>
                  <IonIcon slot="start" icon={clipboard} />
                  Campo
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={() => setShowModal(false)}>
                  <IonIcon size="large" slot="start" icon={shareSocial} />
                  Relacionamento
                </IonButton>
              </IonCol>
            </IonRow>
            </IonContent>
          </IonModal>

          <IonFooter>
          <IonFab vertical="bottom" horizontal="end">
            <IonFabButton onClick={() => setShowModal(true)}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          </IonFooter>

          {/* <IonItemDivider>Eventos</IonItemDivider> */}
          
          {/* <IonItemDivider>Triggers</IonItemDivider> */}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Entity;
