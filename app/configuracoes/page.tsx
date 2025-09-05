"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Bell, BookOpen, Eye, EyeOff, Lock, Palette, Save, Shield, User } from "lucide-react"
import { useState } from "react"

interface ConfiguracoesPageProps {
  onNavigateBack?: () => void
}

export default function ConfiguracoesPage({ onNavigateBack }: ConfiguracoesPageProps) {
  const [activeTab, setActiveTab] = useState("perfil")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Estados do formulário
  const [perfilData, setPerfilData] = useState({
    nome: "Maria Silva",
    email: "maria.silva@pequenoMilagre.org.br",
    telefone: "(11) 99999-9999",
    cargo: "Coordenadora Pedagógica",
    bio: "Especialista em educação inclusiva com foco em TEA",
  })

  const [notificacoes, setNotificacoes] = useState({
    emailAtividades: true,
    emailRelatorios: true,
    pushNotifications: true,
    lembreteReuniao: true,
    alertaProgresso: false,
  })

  const [tema, setTema] = useState("claro")

  const tabs = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "seguranca", label: "Segurança", icon: Shield },
    { id: "notificacoes", label: "Notificações", icon: Bell },
    { id: "aparencia", label: "Aparência", icon: Palette },
  ]

  const handleSave = () => {
    console.log("Salvando configurações...")
    // Aqui seria implementada a lógica de salvamento
  }

  const handleVoltar = () => {
    if (onNavigateBack) {
      onNavigateBack()
    }
  }

  const renderPerfil = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">Informações Pessoais</h3>
        <p className="text-sm text-muted-foreground mb-4">Atualize suas informações pessoais e de contato</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-20 h-20">
          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
            {perfilData.nome
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <Button variant="outline" size="sm">
            Alterar Foto
          </Button>
          <p className="text-xs text-muted-foreground mt-1">JPG, PNG ou GIF. Máximo 2MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            id="nome"
            value={perfilData.nome}
            onChange={(e) => setPerfilData({ ...perfilData, nome: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={perfilData.email}
            onChange={(e) => setPerfilData({ ...perfilData, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            value={perfilData.telefone}
            onChange={(e) => setPerfilData({ ...perfilData, telefone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cargo">Cargo</Label>
          <Select value={perfilData.cargo} onValueChange={(value) => setPerfilData({ ...perfilData, cargo: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Coordenadora Pedagógica">Coordenadora Pedagógica</SelectItem>
              <SelectItem value="Professora">Professora</SelectItem>
              <SelectItem value="Terapeuta">Terapeuta</SelectItem>
              <SelectItem value="Psicóloga">Psicóloga</SelectItem>
              <SelectItem value="Administradora">Administradora</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Biografia</Label>
        <Textarea
          id="bio"
          placeholder="Conte um pouco sobre sua experiência..."
          value={perfilData.bio}
          onChange={(e) => setPerfilData({ ...perfilData, bio: e.target.value })}
          rows={3}
        />
      </div>
    </div>
  )

  const renderSeguranca = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">Segurança da Conta</h3>
        <p className="text-sm text-muted-foreground mb-4">Mantenha sua conta segura alterando sua senha regularmente</p>
      </div>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Alterar Senha</CardTitle>
          <CardDescription>Sua senha deve ter pelo menos 8 caracteres</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Senha Atual</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Digite sua senha atual"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">Nova Senha</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Digite sua nova senha"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua nova senha"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button className="w-full md:w-auto">
            <Lock className="w-4 h-4 mr-2" />
            Alterar Senha
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Sessões Ativas</CardTitle>
          <CardDescription>Gerencie onde você está conectado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background border">
              <div>
                <p className="font-medium text-sm">Computador - Chrome</p>
                <p className="text-xs text-muted-foreground">São Paulo, Brasil • Ativo agora</p>
              </div>
              <Button variant="outline" size="sm">
                Atual
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-background border">
              <div>
                <p className="font-medium text-sm">Tablet - Safari</p>
                <p className="text-xs text-muted-foreground">São Paulo, Brasil • 2 horas atrás</p>
              </div>
              <Button variant="outline" size="sm">
                Encerrar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderNotificacoes = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">Preferências de Notificação</h3>
        <p className="text-sm text-muted-foreground mb-4">Configure como e quando você deseja receber notificações</p>
      </div>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Notificações por Email</CardTitle>
          <CardDescription>Receba atualizações importantes por email</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Novas Atividades</p>
              <p className="text-xs text-muted-foreground">Quando uma nova atividade for criada</p>
            </div>
            <Switch
              checked={notificacoes.emailAtividades}
              onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, emailAtividades: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Relatórios Semanais</p>
              <p className="text-xs text-muted-foreground">Resumo semanal do progresso dos alunos</p>
            </div>
            <Switch
              checked={notificacoes.emailRelatorios}
              onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, emailRelatorios: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Notificações Push</CardTitle>
          <CardDescription>Receba notificações instantâneas no navegador</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notificações Push</p>
              <p className="text-xs text-muted-foreground">Ativar notificações no navegador</p>
            </div>
            <Switch
              checked={notificacoes.pushNotifications}
              onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, pushNotifications: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Lembrete de Reuniões</p>
              <p className="text-xs text-muted-foreground">15 minutos antes das reuniões</p>
            </div>
            <Switch
              checked={notificacoes.lembreteReuniao}
              onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, lembreteReuniao: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Alertas de Progresso</p>
              <p className="text-xs text-muted-foreground">Quando um aluno atingir uma meta</p>
            </div>
            <Switch
              checked={notificacoes.alertaProgresso}
              onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, alertaProgresso: checked })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAparencia = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">Personalização</h3>
        <p className="text-sm text-muted-foreground mb-4">Personalize a aparência da plataforma</p>
      </div>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Tema</CardTitle>
          <CardDescription>Escolha entre tema claro ou escuro</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={tema} onValueChange={setTema}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="claro">Tema Claro</SelectItem>
              <SelectItem value="escuro">Tema Escuro</SelectItem>
              <SelectItem value="sistema">Seguir Sistema</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="bg-muted/20 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Densidade da Interface</CardTitle>
          <CardDescription>Ajuste o espaçamento dos elementos</CardDescription>
        </CardHeader>
        <CardContent>
          <Select defaultValue="normal">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compacta">Compacta</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="confortavel">Confortável</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleVoltar}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Configurações</h1>
              <p className="text-xs text-muted-foreground">Gerencie suas preferências</p>
            </div>
          </div>

          <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar de Configurações */}
        <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${activeTab === tab.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              )
            })}
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6 max-w-4xl">
          {activeTab === "perfil" && renderPerfil()}
          {activeTab === "seguranca" && renderSeguranca()}
          {activeTab === "notificacoes" && renderNotificacoes()}
          {activeTab === "aparencia" && renderAparencia()}
        </main>
      </div>
    </div>
  )
}
