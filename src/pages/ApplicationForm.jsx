import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ApplicationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    cv: null,
    lettre: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate submission
      alert('Candidature envoyée avec succès !');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Postuler - Assistant Commercial H/F
          </h1>
          <p className="text-gray-600">Entreprise XYZ • Bordeaux</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center ${step >= 1 ? 'text-france-blue' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? 'bg-france-blue text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="ml-2 font-semibold">Informations</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 2 ? 'bg-france-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-france-blue' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? 'bg-france-blue text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="ml-2 font-semibold">Documents</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 3 ? 'bg-france-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-france-blue' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 3 ? 'bg-france-blue text-white' : 'bg-gray-200'
              }`}>
                3
              </div>
              <span className="ml-2 font-semibold">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Informations personnelles
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Civilité *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="civilite"
                      value="M"
                      checked={formData.civilite === 'M'}
                      onChange={(e) => setFormData({...formData, civilite: e.target.value})}
                      className="mr-2"
                      required
                    />
                    <span>M.</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="civilite"
                      value="Mme"
                      checked={formData.civilite === 'Mme'}
                      onChange={(e) => setFormData({...formData, civilite: e.target.value})}
                      className="mr-2"
                    />
                    <span>Mme</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Documents de candidature
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-gray-600 mb-2">
                      {formData.cv ? formData.cv.name : 'Choisir un fichier'}
                    </p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 2Mo)</p>
                  </label>
                </div>
                <button
                  type="button"
                  className="mt-3 text-france-blue hover:underline text-sm"
                >
                  ou utiliser mon CV France Travail
                </button>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Lettre de motivation
                </label>
                <textarea
                  value={formData.lettre}
                  onChange={(e) => setFormData({...formData, lettre: e.target.value})}
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
                  placeholder="Expliquez pourquoi vous souhaitez rejoindre notre entreprise..."
                ></textarea>
                <button
                  type="button"
                  className="mt-3 text-france-blue hover:underline text-sm"
                >
                  ou télécharger un fichier
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Vérification et envoi
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Informations personnelles</h3>
                  <p className="text-gray-600">
                    {formData.civilite} {formData.prenom} {formData.nom}
                  </p>
                  <p className="text-gray-600">{formData.email}</p>
                  <p className="text-gray-600">{formData.telephone}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Documents</h3>
                  <p className="text-gray-600">
                    CV: {formData.cv ? formData.cv.name : 'Non fourni'}
                  </p>
                  <p className="text-gray-600">
                    Lettre de motivation: {formData.lettre ? 'Fournie' : 'Non fournie'}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-gray-700">
                    J'accepte que mes données soient transmises à l'employeur 
                    et conservées pour le traitement de ma candidature conformément 
                    à la politique de confidentialité.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              {step === 1 ? 'Annuler' : 'Précédent'}
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-france-blue text-white rounded-md hover:bg-blue-700 transition font-semibold"
            >
              {step === 3 ? 'Envoyer ma candidature' : 'Suivant →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
