import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageModal = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageModalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevels, setZoomLevels] = useState<number[]>(images.map(() => 1));

  // Função para ajustar o nível de zoom de uma imagem específica
  const handleZoom = (delta: number) => {
    setZoomLevels((prev) =>
      prev.map((level, index) =>
        index === currentIndex ? Math.max(1, Math.min(3, level + delta)) : level
      )
    );
  };

  // Função para alternar entre modo fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(console.error);
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(console.error);
    }
  };

  // Fecha o modal e sai do modo fullscreen, se necessário
  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    }
    setZoomLevels(images.map(() => 1)); // Reseta o zoom para todas as imagens
    onClose();
  };

  // Monitora mudanças no modo fullscreen globalmente
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Bloqueia/desbloqueia a rolagem da página ao abrir/fechar o modal
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Limpa a classe ao desmontar o componente
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Obtém o nível de zoom atual da imagem exibida
  const currentZoomLevel = zoomLevels[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full h-full flex flex-col">
          {/* Controles superiores */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleZoom(-0.5)}
              className="text-white hover:bg-white/20"
              aria-label="Diminuir zoom"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleZoom(0.5)}
              className="text-white hover:bg-white/20"
              aria-label="Aumentar zoom"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20"
              aria-label={
                isFullscreen
                  ? "Sair do modo tela cheia"
                  : "Entrar no modo tela cheia"
              }
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-white hover:bg-white/20"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Container da imagem */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${currentZoomLevel})` }}
              aria-hidden="false"
            />

            {/* Botões de navegação */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="absolute left-4 text-white hover:bg-white/20"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate(currentIndex + 1)}
              disabled={currentIndex === images.length - 1}
              className="absolute right-4 text-white hover:bg-white/20"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Contador de imagens */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageModal;
