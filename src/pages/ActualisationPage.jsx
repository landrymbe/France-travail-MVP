import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ActualisationPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    worked: null,
    hours: '',
    activityType: '',
    employer: '',
    grossAmount: '',
    training: null,
    trainingHours: '',
    absence: null,
    absenceReason: '',
    absenceDays: '',
    searchActive: true
  });
  const [errors, setErrors] = useState({});
  const [isLate, setIsLate] = useState(false);

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (formData.worked === null) {
        newErrors.worked = 'Veuillez indiquer si vous avez travaillé';
      }
      if (formData.worked && !formData.hours) {
        newErrors.hours = 'Veuillez indiquer le nombre d\'heures';
      }
      if (formData.worked && !formData.activityType) {
        newErrors.activityType = 'Veuillez sélectionner le type d\'activité';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
        window.scrollTo(0, 0);
      } else {
        // Simulate submission
        navigate('/actualisation/confirmation');
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Warning Banner if late */}
      {isLate && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <div className="container mx-auto flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            <div>
              <p className="font-bold">Actualisation hors délai</p>
              <p className="text-sm">
                Votre actualisation est en retard. Cela peut impacter vos paiements.
                Vous pouvez joindre un justificatif à la fin du formulaire.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Actualisation de situation
          </h1>
          <p className="text-gray-600">
            Période: <span className="font-semibold">01/02/2026 au 28/02/2026</span>
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              ℹ️ Actualisez votre situation chaque mois pour continuer à percevoir vos allocations.
              Cette démarche est <span className="font-semibold">obligatoire</span>.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s 
                    ? 'bg-france-blue text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 transition-all ${
                    step > s ? 'bg-france-blue' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span className={step >= 1 ? 'font-semibold text-france-blue' : ''}>Activité</span>
            <span className={step >= 2 ? 'font-semibold text-france-blue' : ''}>Formation</span>
            <span className={step >= 3 ? 'font-semibold text-france-blue' : ''}>Absence</span>
            <span className={step >= 4 ? 'font-semibold text-france-blue' : ''}>Validation</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Step 1: Activity */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Avez-vous travaillé en février ?
              </h2>

              <div className="space-y-4">
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.worked === true 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="worked"
                    checked={formData.worked === true}
                    onChange={() => setFormData({...formData, worked: true})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Oui</span>
                    <span className="text-sm text-gray-600">J'ai exercé une activité rémunérée</span>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.worked === false 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="worked"
                    checked={formData.worked === false}
                    onChange={() => setFormData({...formData, worked: false})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Non</span>
                    <span className="text-sm text-gray-600">Je n'ai pas travaillé ce mois-ci</span>
                  </div>
                </label>
              </div>

              {errors.worked && (
                <p className="text-red-600 text-sm mt-2">⚠️ {errors.worked}</p>
              )}

              {/* If worked = Yes */}
              {formData.worked === true && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombre d'heures travaillées *
                    </label>
                    <input
                      type="number"
                      value={formData.hours}
                      onChange={(e) => setFormData({...formData, hours: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue ${
                        errors.hours ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ex: 35"
                    />
                    {errors.hours && (
                      <p className="text-red-600 text-sm mt-1">⚠️ {errors.hours}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">
                      💡 Indiquez le nombre total d'heures, même si réparties sur plusieurs employeurs
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Type d'activité *
                    </label>
                    <select
                      value={formData.activityType}
                      onChange={(e) => setFormData({...formData, activityType: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue ${
                        errors.activityType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">-- Sélectionnez --</option>
                      <option value="salariat">Salariat</option>
                      <option value="interim">Intérim</option>
                      <option value="formation_remuneree">Formation rémunérée</option>
                      <option value="stage">Stage</option>
                      <option value="auto_entrepreneur">Auto-entrepreneur / Micro-entreprise</option>
                    </select>
                    {errors.activityType && (
                      <p className="text-red-600 text-sm mt-1">⚠️ {errors.activityType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Employeur / Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.employer}
                      onChange={(e) => setFormData({...formData, employer: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                      placeholder="Nom de l'employeur"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Montant brut perçu (optionnel)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.grossAmount}
                        onChange={(e) => setFormData({...formData, grossAmount: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                        placeholder="Ex: 1200"
                      />
                      <span className="absolute right-4 top-3 text-gray-500">€</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Cette information nous permet de mieux calculer vos droits
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      📊 Impact sur vos indemnités
                    </h4>
                    <p className="text-sm text-gray-700">
                      Vos heures travaillées seront déduites de vos allocations du mois.
                      Le calcul sera effectué automatiquement.
                    </p>
                  </div>
                </div>
              )}

              {/* If worked = No */}
              {formData.worked === false && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Aucune activité déclarée
                      </h4>
                      <p className="text-sm text-gray-700">
                        Vous continuerez à percevoir vos allocations normalement.
                        Passez à l'étape suivante.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Formation */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Avez-vous suivi une formation en février ?
              </h2>

              <div className="space-y-4">
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.training === true 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="training"
                    checked={formData.training === true}
                    onChange={() => setFormData({...formData, training: true})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Oui</span>
                    <span className="text-sm text-gray-600">J'ai participé à une formation</span>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.training === false 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="training"
                    checked={formData.training === false}
                    onChange={() => setFormData({...formData, training: false})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Non</span>
                    <span className="text-sm text-gray-600">Je n'ai pas suivi de formation</span>
                  </div>
                </label>
              </div>

              {formData.training === true && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombre d'heures de formation
                    </label>
                    <input
                      type="number"
                      value={formData.trainingHours}
                      onChange={(e) => setFormData({...formData, trainingHours: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                      placeholder="Ex: 35"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Absence */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Avez-vous été absent(e) ou indisponible ?
              </h2>

              <div className="space-y-4">
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.absence === true 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="absence"
                    checked={formData.absence === true}
                    onChange={() => setFormData({...formData, absence: true})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Oui</span>
                    <span className="text-sm text-gray-600">
                      Maladie, congé, indisponibilité pour recherche
                    </span>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.absence === false 
                    ? 'border-france-blue bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="absence"
                    checked={formData.absence === false}
                    onChange={() => setFormData({...formData, absence: false})}
                    className="mr-4 w-5 h-5"
                  />
                  <div>
                    <span className="text-lg font-semibold text-gray-800 block">Non</span>
                    <span className="text-sm text-gray-600">
                      J'étais disponible pour travailler
                    </span>
                  </div>
                </label>
              </div>

              {formData.absence === true && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Motif d'absence
                    </label>
                    <select
                      value={formData.absenceReason}
                      onChange={(e) => setFormData({...formData, absenceReason: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                    >
                      <option value="">-- Sélectionnez --</option>
                      <option value="maladie">Maladie</option>
                      <option value="maternite">Maternité / Paternité</option>
                      <option value="conges">Congés</option>
                      <option value="hospitalisation">Hospitalisation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombre de jours
                    </label>
                    <input
                      type="number"
                      value={formData.absenceDays}
                      onChange={(e) => setFormData({...formData, absenceDays: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                      placeholder="Ex: 5"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Validation */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Vérification et validation
              </h2>

              <div className="space-y-6">
                {/* Activity Summary */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span>💼</span>
                    <span>Activité professionnelle</span>
                  </h3>
                  {formData.worked ? (
                    <div className="space-y-2 text-gray-700">
                      <p>• Heures travaillées: <strong>{formData.hours}h</strong></p>
                      <p>• Type d'activité: <strong>{formData.activityType}</strong></p>
                      {formData.employer && (
                        <p>• Employeur: <strong>{formData.employer}</strong></p>
                      )}
                      {formData.grossAmount && (
                        <p>• Montant brut: <strong>{formData.grossAmount}€</strong></p>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-700">Aucune activité déclarée ce mois</p>
                  )}
                </div>

                {/* Training Summary */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span>📚</span>
                    <span>Formation</span>
                  </h3>
                  {formData.training ? (
                    <p className="text-gray-700">
                      {formData.trainingHours}h de formation suivies
                    </p>
                  ) : (
                    <p className="text-gray-700">Aucune formation ce mois</p>
                  )}
                </div>

                {/* Absence Summary */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span>🏥</span>
                    <span>Absence / Indisponibilité</span>
                  </h3>
                  {formData.absence ? (
                    <div className="space-y-2 text-gray-700">
                      <p>• Motif: <strong>{formData.absenceReason}</strong></p>
                      <p>• Durée: <strong>{formData.absenceDays} jours</strong></p>
                    </div>
                  ) : (
                    <p className="text-gray-700">Aucune absence ce mois</p>
                  )}
                </div>

                {/* Search Active */}
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.searchActive}
                      onChange={(e) => setFormData({...formData, searchActive: e.target.checked})}
                      className="mt-1 mr-3 w-5 h-5"
                    />
                    <div>
                      <span className="font-semibold text-gray-800 block mb-1">
                        Je certifie être toujours en recherche d'emploi
                      </span>
                      <span className="text-sm text-gray-600">
                        Je suis disponible et effectue des démarches actives de recherche
                      </span>
                    </div>
                  </label>
                </div>

                {/* Attestation */}
                <div className="border-t pt-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      ⚠️ En validant cette actualisation, je certifie l'exactitude des informations
                      fournies. Toute fausse déclaration peut entraîner des sanctions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
              disabled={step === 1}
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-france-blue text-white rounded-md hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={step === 4 && !formData.searchActive}
            >
              {step === 4 ? 'Valider mon actualisation' : 'Suivant →'}
            </button>
          </div>
        </div>

        {/* Help Sidebar */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>Besoin d'aide ?</span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button className="text-france-blue hover:underline">
                • Que dois-je déclarer ?
              </button>
            </li>
            <li>
              <button className="text-france-blue hover:underline">
                • Comment calculer mes heures ?
              </button>
            </li>
            <li>
              <button className="text-france-blue hover:underline">
                • Quel est l'impact sur mes indemnités ?
              </button>
            </li>
            <li>
              <button className="text-france-blue hover:underline">
                • Questions fréquentes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
