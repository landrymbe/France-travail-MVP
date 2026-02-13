import { Link } from 'react-router-dom';

export default function ActualisationConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-block animate-bounce">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl text-white">✓</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Actualisation validée !
          </h1>
          <p className="text-xl text-gray-600">
            Votre déclaration a bien été enregistrée
          </p>
        </div>

        {/* Info Cards */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <span className="text-3xl">📅</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Prochain paiement</h3>
                <p className="text-gray-700">
                  Votre allocation sera versée le <strong>05/03/2026</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <span className="text-3xl">💶</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Montant estimé</h3>
                <p className="text-gray-700">
                  Environ <strong>1 245€</strong> (calcul définitif en cours)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
              <span className="text-3xl">📧</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Confirmation</h3>
                <p className="text-gray-700">
                  Un email de confirmation vous a été envoyé
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminder */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>⏰</span>
            <span>À ne pas oublier</span>
          </h3>
          <p className="text-gray-700 mb-3">
            Votre prochaine actualisation devra être effectuée entre le 
            <strong> 28/02/2026 et le 15/03/2026</strong>
          </p>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600">
              M'envoyer un rappel par email 3 jours avant
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/"
            className="flex-1 bg-france-blue text-white px-6 py-4 rounded-md hover:bg-blue-700 transition font-semibold text-center"
          >
            Retour à l'accueil
          </Link>
          <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-4 rounded-md hover:bg-gray-50 transition font-semibold">
            Télécharger l'attestation PDF
          </button>
        </div>

        {/* Help Link */}
        <div className="text-center mt-6">
          <Link to="/aide" className="text-france-blue hover:underline text-sm">
            Une question sur votre actualisation ?
          </Link>
        </div>
      </div>
    </div>
  );
}
