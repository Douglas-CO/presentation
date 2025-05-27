import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";

// Definición de tipos para los datos de la API
type Option = {
  id: string;
  value: string;
};

type Question = {
  id: string;
  text: string;
  type:
    | "BOOLEAN"
    | "SELECCION UNICA"
    | "SELECCION MULTIPLE"
    | "RESPUESTA ESCRITA"
    | "SELECCION RANKING"
    | "SELECCION POR ATRIBUTO"
    | "SELECCION MUY PROBABLE"
    | "SELECCION NIVEL SATISFACCION";
  options: Option[];
};

type SurveyItem = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  questions: Question[];
};

type SurveyResponse = {
  status: number;
  message: string;
  data: {
    meta: {
      next: null;
      previous: null;
      count: number;
      total_pages: number;
    };
    items: SurveyItem[];
  };
};

// Props para el componente principal
interface SurveyFormProps {
  uuidTemplate: string;
  uuidService: string;
  lineaServicio: number;
  template: number;
}

// Props para los componentes de preguntas
interface BooleanQuestionProps {
  question: string;
  selectedOption: boolean | null;
  handleOptionChange: (value: boolean) => void;
}

interface SingleSelectQuestionProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  handleOptionChange: (optionId: string) => void;
}

interface MultipleSelectQuestionProps {
  question: string;
  options: Option[];
  selectedOptions: string[];
  handleOptionChange: (optionId: string, isChecked: boolean) => void;
}

interface TextQuestionProps {
  question: string;
  answer: string;
  handleAnswerChange: (text: string) => void;
}

interface AtributosQuestionProps {
  question: string;
  options: Option[];
  selectedOptions: Record<string, string>;
  handleOptionChange: (optionId: string, value: string) => void;
}

interface RankingQuestionProps {
  question: string;
  options: Option[];
  selectedOptions: Record<string, number>;
  handleOptionChange: (optionId: string, ranking: number) => void;
}

interface MuyProbableQuestionProps {
  question: string;
  selectedValue: number | null;
  handleValueChange: (value: number) => void;
}

// Definición de props para el nuevo componente
interface NivelSatisfaccionQuestionProps {
  question: string;
  options: Option[];
  selectedOptions: Record<string, string>;
  handleOptionChange: (optionId: string, value: string) => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({
  uuidTemplate,
  uuidService,
  lineaServicio,
  template,
}) => {
  const [surveyData, setSurveyData] = useState<SurveyItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showSurvey, setShowSurvey] = useState(false);

  const consultLineaServicio = async () => {
    try {
      const response = await fetch(
        `https://yiga5.coders.cfd/api/v1/linea-servicio/free/${uuidService}/`
      );
      const data: SurveyResponse = await response.json();

      if (data.status === 200) {
        console.log(response);
      }
    } catch (err) {
      setError("Error al cargar la encuesta");
      setShowSurvey(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const consultSurvey = async () => {
    try {
      const response = await fetch(
        `https://yiga5.coders.cfd/api/v1/survey-response/free/all/?linea_servicio=${lineaServicio}&template=${template}`
      );
      const data: SurveyResponse = await response.json();

      if (data.status === 200) {
        // Si hay items, el usuario ha completado la encuesta
        if (data.data.items.length > 0) {
          setShowSurvey(true);
        }
      } else {
        setError("No se encontró la encuesta");
        setShowSurvey(false);
      }
    } catch (err) {
      setError("Error al cargar la encuesta");
      setShowSurvey(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSurvey = async () => {
    try {
      const response = await fetch(
        `https://yiga5.coders.cfd/api/v1/survey-template/free/?uuid=${uuidTemplate}`
      );
      const data: SurveyResponse = await response.json();

      if (data.status === 200 && data.data.items.length > 0) {
        setSurveyData(data.data.items[0]);
        // Inicializar respuestas vacías
        const initialAnswers: Record<string, any> = {};
        data.data.items[0].questions.forEach((question) => {
          if (question.type === "BOOLEAN") {
            initialAnswers[question.id] = null;
          } else if (question.type === "SELECCION MULTIPLE") {
            initialAnswers[question.id] = [];
          } else {
            initialAnswers[question.id] = "";
          }
        });
        setAnswers(initialAnswers);
      } else {
        setError("No se encontró la encuesta");
      }
    } catch (err) {
      setError("Error al cargar la encuesta");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    consultLineaServicio();
    consultSurvey();
    fetchSurvey();
  }, [uuidTemplate]);

  const handleBooleanChange = (questionId: string, value: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSingleSelectChange = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleMultipleSelectChange = (
    questionId: string,
    optionId: string,
    isChecked: boolean
  ) => {
    setAnswers((prev) => {
      const currentAnswers = (prev[questionId] as string[]) || [];
      let newAnswers: string[];

      if (isChecked) {
        newAnswers = [...currentAnswers, optionId];
      } else {
        newAnswers = currentAnswers.filter((id) => id !== optionId);
      }

      return {
        ...prev,
        [questionId]: newAnswers,
      };
    });
  };

  const handleTextAnswerChange = (questionId: string, text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text,
    }));
  };

  const handleRankingChange = (
    questionId: string,
    optionId: string,
    value: number
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [optionId]: value,
      },
    }));
  };

  const handleMuyProbableChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleStringOptionChange = (
    questionId: string,
    optionId: string,
    value: string
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [optionId]: value,
      },
    }));
  };

  // Nivel satisfacción - usa IDs de opciones como claves
  const handleSatisfactionChange = (
    questionId: string,
    optionId: string,
    value: string
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [optionId]: value,
      },
    }));
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case "BOOLEAN":
        return (
          <BooleanQuestion
            question={question.text}
            selectedOption={answers[question.id] as boolean | null}
            handleOptionChange={(value) =>
              handleBooleanChange(question.id, value)
            }
          />
        );
      case "SELECCION UNICA":
        return (
          <SingleSelectQuestion
            question={question.text}
            options={question.options}
            selectedOption={answers[question.id] as string | null}
            handleOptionChange={(optionId) =>
              handleSingleSelectChange(question.id, optionId)
            }
          />
        );
      case "SELECCION MULTIPLE":
        return (
          <MultipleSelectQuestion
            question={question.text}
            options={question.options}
            selectedOptions={(answers[question.id] as string[]) || []}
            handleOptionChange={(optionId, isChecked) =>
              handleMultipleSelectChange(question.id, optionId, isChecked)
            }
          />
        );
      case "RESPUESTA ESCRITA":
        return (
          <TextQuestion
            question={question.text}
            answer={answers[question.id] as string}
            handleAnswerChange={(text) =>
              handleTextAnswerChange(question.id, text)
            }
          />
        );
      case "SELECCION POR ATRIBUTO":
        return (
          <AtributosQuestion
            question={question.text}
            options={question.options}
            selectedOptions={
              (answers[question.id] as Record<string, string>) || {}
            }
            handleOptionChange={(optionId, value) =>
              handleStringOptionChange(question.id, optionId, value)
            }
          />
        );
      case "SELECCION RANKING":
        return (
          <RankingQuestion
            question={question.text}
            options={question.options}
            selectedOptions={
              (answers[question.id] as Record<string, number>) || {}
            }
            handleOptionChange={(optionId, ranking) =>
              handleRankingChange(question.id, optionId, ranking)
            }
          />
        );
      case "SELECCION MUY PROBABLE":
        return (
          <MuyProbableQuestion
            question={question.text}
            selectedValue={answers[question.id] as number | null}
            handleValueChange={(value) =>
              handleMuyProbableChange(question.id, value)
            }
          />
        );
      case "SELECCION NIVEL SATISFACCION":
        return (
          <NivelSatisfaccionQuestion
            question={question.text}
            options={question.options}
            selectedOptions={
              (answers[question.id] as Record<string, string>) || {}
            }
            handleOptionChange={(optionId, value) =>
              handleSatisfactionChange(question.id, optionId, value)
            }
          />
        );
      // Agrega más casos para otros tipos de preguntas según sea necesario
      default:
        return <div>Tipo de pregunta no soportado: {question.type}</div>;
    }
  };

  const handleSubmit = async () => {
    try {
      // Verificar que todas las preguntas estén respondidas
      const unansweredQuestions = surveyData?.questions.filter((question) => {
        const answer = answers[question.id];
        return (
          answer === null ||
          answer === "" ||
          (Array.isArray(answer) && answer.length === 0) ||
          (typeof answer === "object" && Object.keys(answer).length === 0)
        );
      });

      if (unansweredQuestions && unansweredQuestions.length > 0) {
        alert("Por favor responde todas las preguntas antes de enviar");
        return;
      }

      // Preparar el cuerpo del POST
      const requestBody = {
        answers: answers,
        template: surveyData?.id,
        linea_servicio: 1,
        asesor: 1,
      };

      console.log("Enviando respuestas:", requestBody);

      const response = await fetch(
        "https://yiga5.coders.cfd/api/v1/survey-response/free/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar la encuesta");
      }

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);
      alert("Encuesta enviada con éxito!");
    } catch (error) {
      console.error("Error al enviar la encuesta:", error);
      alert(
        "Ocurrió un error al enviar la encuesta. Por favor intenta nuevamente."
      );
    }
  };

  if (loading) {
    return (
      <Container
        maxWidth="md"
        style={{ display: "flex", justifyContent: "center", padding: "40px" }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" style={{ padding: "40px" }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  if (!surveyData) {
    return (
      <Container maxWidth="md" style={{ padding: "40px" }}>
        <Typography>No se encontró la encuesta</Typography>
      </Container>
    );
  }

  return showSurvey ? (
    <>
      <>
        <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
          {surveyData?.name || "Encuesta completada"}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ marginBottom: "30px" }}
        >
          Gracias por completar nuestra encuesta. Tu feedback es muy importante
          para nosotros.
        </Typography>
      </>
    </>
  ) : (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
          {surveyData.name}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ marginBottom: "30px" }}
        >
          {surveyData.description}
        </Typography>

        {surveyData.questions.map((question, index) => {
          const questionComponent = renderQuestion(question);
          return (
            <Box key={question.id} mb={4}>
              {React.createElement(questionComponent.type, {
                ...questionComponent.props,
                question: `${index + 1}. ${question.text}`,
              })}
            </Box>
          );
        })}

        <Box display="flex" justifyContent="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="large"
          >
            Enviar Encuesta
          </Button>
        </Box>
      </Container>
    </>
  );
};

// Componente para preguntas booleanas (SI/NO)
// Componente para preguntas booleanas (SI/NO) con diseño consistente
const BooleanQuestion: React.FC<BooleanQuestionProps> = ({
  question,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona una opción
      </Typography>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Opción SI */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            cursor: "pointer",
            backgroundColor:
              selectedOption === true ? "#f5f5f5" : "transparent",
            padding: "8px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
          }}
          onClick={() => handleOptionChange(true)}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: selectedOption === true ? "#9c27b0" : "#e0e0e0",
              color: selectedOption === true ? "white" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              flexShrink: 0,
            }}
          >
            {selectedOption === true && (
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            )}
          </div>
          <Typography style={{ fontSize: "14px" }}>SI</Typography>
        </div>

        {/* Opción NO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            cursor: "pointer",
            backgroundColor:
              selectedOption === false ? "#f5f5f5" : "transparent",
            padding: "8px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
          }}
          onClick={() => handleOptionChange(false)}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: selectedOption === false ? "#9c27b0" : "#e0e0e0",
              color: selectedOption === false ? "white" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              flexShrink: 0,
            }}
          >
            {selectedOption === false && (
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            )}
          </div>
          <Typography style={{ fontSize: "14px" }}>NO</Typography>
        </div>
      </div>
    </Paper>
  );
};

// Componente para selección única con diseño de ranking
const SingleSelectQuestion: React.FC<SingleSelectQuestionProps> = ({
  question,
  options,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona una opción
      </Typography>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => (
          <div
            key={option.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              cursor: "pointer",
              backgroundColor:
                selectedOption === option.id ? "#f5f5f5" : "transparent",
              padding: "8px",
              borderRadius: "4px",
              transition: "background-color 0.2s",
            }}
            onClick={() => handleOptionChange(option.id)}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor:
                  selectedOption === option.id ? "#9c27b0" : "#e0e0e0",
                color: selectedOption === option.id ? "white" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                flexShrink: 0,
              }}
            >
              {/* Punto indicador de selección (sin número) */}
              {selectedOption === option.id && (
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                />
              )}
            </div>
            <Typography style={{ fontSize: "14px" }}>{option.value}</Typography>
          </div>
        ))}
      </div>
    </Paper>
  );
};

// Componente para selección múltiple con diseño de ranking
const MultipleSelectQuestion: React.FC<MultipleSelectQuestionProps> = ({
  question,
  options,
  selectedOptions,
  handleOptionChange,
}) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona una o más opciones
      </Typography>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);

          return (
            <div
              key={option.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#f5f5f5" : "transparent",
                padding: "8px",
                borderRadius: "4px",
                transition: "background-color 0.2s",
              }}
              onClick={() => handleOptionChange(option.id, !isSelected)}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "#9c27b0" : "#e0e0e0",
                  color: isSelected ? "white" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                  flexShrink: 0,
                }}
              >
                {/* Check indicador de selección (sin número) */}
                {isSelected && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <Typography style={{ fontSize: "14px" }}>
                {option.value}
              </Typography>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

// Componente para respuesta escrita
const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  answer,
  handleAnswerChange,
}) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={answer}
        onChange={(e) => handleAnswerChange(e.target.value)}
        multiline
        rows={4}
      />
    </Paper>
  );
};

// Componente para preguntas por atributos (SELECCION POR ATRIBUTO)
const AtributosQuestion: React.FC<AtributosQuestionProps> = ({
  question,
  options,
  selectedOptions,
  handleOptionChange,
}) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona para cada atributo si es Mejor, Igual o Peor
      </Typography>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{ textAlign: "left", padding: "8px 0", width: "60%" }}
              ></th>
              <th
                style={{ padding: "8px 0", width: "8%", textAlign: "center" }}
              >
                Mejor
              </th>
              <th
                style={{ padding: "8px 0", width: "8%", textAlign: "center" }}
              >
                Igual
              </th>
              <th
                style={{ padding: "8px 0", width: "8%", textAlign: "center" }}
              >
                Peor
              </th>
            </tr>
          </thead>
          <tbody>
            {options.map((option) => (
              <tr key={option.id} style={{ borderBottom: "1px solid #e0e0e0" }}>
                <td
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography style={{ fontSize: "14px" }}>
                    {option.value}
                  </Typography>
                </td>

                {["mejor", "igual", "peor"].map((tipo) => (
                  <td
                    key={tipo}
                    style={{ textAlign: "center", padding: "12px 0" }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleOptionChange(
                          option.id,
                          tipo as "mejor" | "igual" | "peor"
                        )
                      }
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor:
                            selectedOptions[option.id] === tipo
                              ? "#9c27b0"
                              : "#e0e0e0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "background-color 0.2s",
                        }}
                      >
                        {selectedOptions[option.id] === tipo && (
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              backgroundColor: "white",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Paper>
  );
};

// Componente para preguntas de ranking (SELECCION RANKING)
const RankingQuestion: React.FC<RankingQuestionProps> = ({
  question,
  options,
  selectedOptions,
  handleOptionChange,
}) => {
  // Convertimos el objeto de respuestas a un array ordenado
  const rankedOptions = Object.entries(selectedOptions)
    .filter(([_, ranking]) => ranking > 0)
    .sort((a, b) => a[1] - b[1])
    .map(([optionId]) => optionId);

  const handleRankingClick = (optionId: string) => {
    const currentRanking = selectedOptions[optionId] || 0;
    const isOptionSelected = currentRanking > 0;
    const isLastSelected =
      rankedOptions.length > 0 &&
      rankedOptions[rankedOptions.length - 1] === optionId;

    // Solo permitir deseleccionar si es la última opción seleccionada
    if (isOptionSelected) {
      if (isLastSelected) {
        handleOptionChange(optionId, 0);
      }
      return;
    }

    // Si no está seleccionado y no hemos alcanzado el máximo (10), lo agregamos
    if (rankedOptions.length < 10) {
      const nextRanking = rankedOptions.length + 1;
      handleOptionChange(optionId, nextRanking);
    }
  };

  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Haz clic en los atributos para ordenarlos según tu preferencia (1 es el
        más importante)
      </Typography>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => {
          const ranking = selectedOptions[option.id] || 0;

          return (
            <div
              key={option.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                cursor: "pointer",
                backgroundColor: ranking ? "#f5f5f5" : "transparent",
                padding: "8px",
                borderRadius: "4px",
                transition: "background-color 0.2s",
                // border: isLastSelected ? '1px solid #9c27b0' : '1px solid transparent'
              }}
              onClick={() => handleRankingClick(option.id)}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: ranking ? "#9c27b0" : "#e0e0e0",
                  color: ranking ? "white" : "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                  flexShrink: 0,
                }}
              >
                {ranking || ""}
              </div>
              <Typography style={{ fontSize: "14px" }}>
                {option.value}
              </Typography>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

// Componente para preguntas de probabilidad (SELECCION MUY PROBABLE)
const MuyProbableQuestion: React.FC<MuyProbableQuestionProps> = ({
  question,
  selectedValue,
  handleValueChange,
}) => {
  const scale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona un valor del 0 al 10 (0 = Nada probable, 10 = Muy probable)
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          overflowX: "auto",
          padding: "8px 0",
        }}
      >
        {scale.map((value) => (
          <div
            key={value}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 4px",
              cursor: "pointer",
            }}
            onClick={() => handleValueChange(value)}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor:
                  selectedValue === value ? "#9c27b0" : "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "4px",
                transition: "background-color 0.2s",
              }}
            >
              <Typography
                style={{
                  color: selectedValue === value ? "white" : "#666",
                  fontWeight: selectedValue === value ? "bold" : "normal",
                }}
              >
                {value}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "#666",
          padding: "0 8px",
        }}
      >
        <Typography variant="caption">Nada probable</Typography>
        <Typography variant="caption">Muy probable</Typography>
      </div>
    </Paper>
  );
};

// Componente para preguntas de nivel de satisfacción
const NivelSatisfaccionQuestion: React.FC<NivelSatisfaccionQuestionProps> = ({
  question,
  options,
  selectedOptions,
  handleOptionChange,
}) => {
  const scale = ["N/A", "1", "2", "3", "4", "5"];

  return (
    <Paper elevation={1} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        {question}
      </Typography>

      <Typography
        variant="body2"
        style={{ marginBottom: "16px", color: "#666" }}
      >
        Selecciona una opción del 1 al 5 que refleje tu nivel de satisfacción (1
        = Nada satisfecho, 5 = Muy satisfecho). Si no aplica, selecciona N/A.
      </Typography>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => (
          <div key={option.id} style={{ marginBottom: "24px" }}>
            <Typography
              style={{
                fontSize: "14px",
                marginBottom: "12px",
                fontWeight: "500",
              }}
            >
              {option.value}
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflowX: "auto",
                padding: "8px 0",
              }}
            >
              {scale.map((value) => (
                <div
                  key={value}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0 4px",
                    cursor: "pointer",
                    minWidth: "50px",
                  }}
                  onClick={() => handleOptionChange(option.id, value)}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor:
                        selectedOptions[option.id] === value
                          ? "#9c27b0"
                          : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "4px",
                      transition: "background-color 0.2s",
                    }}
                  >
                    <Typography
                      style={{
                        color:
                          selectedOptions[option.id] === value
                            ? "white"
                            : "#666",
                        fontWeight:
                          selectedOptions[option.id] === value
                            ? "bold"
                            : "normal",
                      }}
                    >
                      {value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default SurveyForm;
