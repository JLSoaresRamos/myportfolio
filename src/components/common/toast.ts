import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConf: ToastOptions = {
	position: "top-center",
	hideProgressBar: true,
	theme: "dark",
};

const successMessage = () =>
	toast.success("Mensagem enviada com sucesso!", toastConf);
const errorMessage = () =>
	toast.error("Falha ao enviar a mensagem. Tente novamente.", toastConf);

export { successMessage, errorMessage };
