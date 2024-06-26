import Login from './screens/login_screen/login';
import Layout from './components/layout/layout';
import Missing from './components/missing/missing';
import { Routes, Route } from 'react-router-dom';
import InvitadoHome from './screens/visitante/home/invitadoHome';
import InvitacionA from './screens/visitante/Invitacion/invitacionA';
import Dashboard from './screens/resident/dashboard/dashboard';
import DashboardE from './screens/resident/dashboard/dashboardEncargado';
import ResidentQr from './screens/resident/resident-qr/resident-qr';
import ResidentQrE from './screens/resident/resident-qr/resident-qr-encargado';
import SingleInvitation from './screens/resident/invitations/singleInvitation';
import RecurrntInvitation from './screens/resident/invitations/recurrentInvitation';
import SingleInvitationE from './screens/resident/invitations/singleInvitationEncargado';
import RecurrntInvitationE from './screens/resident/invitations/recurrentInvitationEncargado';
import GestionHogar from './screens/residente-jefe/gestion_hogar/gestion_hogar';
import AgregarMiembro from './screens/residente-jefe/agregar_miembro/Agregar_Miembro';
import AdminHome from './screens/admin/home/adminHome';
import AdminCasa from './screens/admin/adminCasa/adminCasa';
import AgregarEliminar from './screens/admin/adminAgregarEliminar/adminAgregarEliminar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditarInfoCasa from './screens/admin/editarInfoCasa/editarInfoCasa';
import ProfileVisitante from './screens/visitante/profile/profileVisitante';
import HomeVigilante from './screens/vigilante/home/homeVigilante';
import Profile from './screens/resident/profile/profile';
import ProfileE from './screens/resident/profile/profileEncargado';
import Registro_Entradas from './screens/residente-jefe/lista_entradas/Registro_Entradas';
import SolicitudVisitas from './screens/residente-jefe/solicitudes/SolicitudVisitas';
import InvitacionesJefe from './screens/residente-jefe/invitaciones_jefe/InvitacionesJefe';
import QrVisitante from './screens/visitante/qrVisitante/qrVisitante'

/* const ROLES = {
  SYSADMIN: ['tlahtoani'],
  ADMIN: ['temachtiani'],
  USER: ['temachtilli']
}; */



function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} /> {/* por el momento de prueba queda si */}

          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="gestion-hogar" element={<GestionHogar />}/>
          <Route path="agregar-miembro" element={<AgregarMiembro />}/>
          <Route path="entradas" element={<Registro_Entradas />}/>
          <Route path="solicitudes" element={<SolicitudVisitas />}/>
          <Route path="lista-invitaciones" element={<InvitacionesJefe />}/>
          
          <Route path="invitadoHome" element={<InvitadoHome />} />
          <Route path='/invitacion/:id' element={<InvitacionA />} />

          <Route path="profileVisitante" element={<ProfileVisitante />} />


          {/* Administrador */}
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/administrar-casa" element={<AdminCasa />} />
          <Route path="admin/administrar-casa/agregar-eliminar" element={<AgregarEliminar />} />
          <Route path="admin/administrar-casa/editarinformacion" element={<EditarInfoCasa />} />

          {/* vigilante */}
          <Route path="vigilanteHome" element={<HomeVigilante />} />

          {/* Residente */}
          <Route path="residente" element={<Dashboard />} />
          <Route path="residente/mi-qr" element={<ResidentQr />} />
          <Route path="residente/invitacion/unica" element={<SingleInvitation />} />
          <Route path="residente/invitacion/recurrente" element={<RecurrntInvitation />} />

          <Route path="residente/perfil" element={<Profile/>} />

          {/* Visitante NO TOCAR ANGELITO... ATT: REYNOSA*/}
          <Route path="invitadoHome" element={<InvitadoHome />} />
          <Route path='invitadoHome/invitacion/:id' element={<InvitacionA />} />
          <Route path='invitadoHome/invitacion/:id/mi-qr' element={<QrVisitante />} />
          <Route path="invitadoHome/profileVisitante" element={<ProfileVisitante />} />


         {/* we want to protect these routes */}
         {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} /
          <Route path="residente/perfil" element={<Profile />} />
          {/* Encargado */}
          <Route path="residente/encargado" element={<DashboardE />} />
          <Route path="residente/encargado/mi-qr" element={<ResidentQrE />} />
          <Route path="residente/invitacion/unicae" element={<SingleInvitationE />} />
          <Route path="residente/invitacion/recurrenten" element={<RecurrntInvitationE />} />
          <Route path="residente/gestion" element={<GestionHogar />} />
          <Route path="residente/agregar-miembro" element={<AgregarMiembro />} />
          <Route path="residente/entradas" element={<Registro_Entradas />} />
          <Route path="residente/solicitudes" element={<SolicitudVisitas />} />
          <Route path="residente/invitacion/lista" element={<InvitacionesJefe />} />
          <Route path="residente/perfile" element={<ProfileE/>} />


          {/* we want to protect these routes */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} /
          <Route path="/" element={<Home />} />
          </Route>
          
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.SYSADMIN]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
