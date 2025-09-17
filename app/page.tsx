"use client"

import type React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Eye,
  EyeOff,
  Home,
  Lock,
  LogOut,
  Mail,
  Plus,
  Settings,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"
import ConfiguracoesPage from "./configuracoes/page"

export default function SistemaEducacionalONG() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [telaAtiva, setTelaAtiva] = useState("dashboard")

  const handleLogout = () => {
    setEmail("")
    setPassword("")
    setRememberMe(false)
    setTelaAtiva("dashboard")
    console.log("[v0] Logout realizado")
  }

  const handleVoltarConfiguracoes = () => {
    setTelaAtiva("dashboard")
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "calendario", label: "Calendário", icon: Calendar },
    { id: "alunos", label: "Alunos", icon: Users },
    { id: "atividades", label: "Atividades", icon: BookOpen },
  ]

  const proximasAtividades = [
    { id: 1, titulo: "Terapia Ocupacional - João", horario: "09:00", tipo: "terapia" },
    { id: 2, titulo: "Aula de Matemática - Turma A", horario: "10:30", tipo: "aula" },
    { id: 3, titulo: "Reunião com Pais - Maria", horario: "14:00", tipo: "reuniao" },
    { id: 4, titulo: "Atividade Sensorial - Pedro", horario: "15:30", tipo: "atividade" },
  ]

  const alunosRecentes = [
    { id: 1, nome: "João Silva", progresso: 85, ultimaAtividade: "Terapia da Fala" },
    { id: 2, nome: "Maria Santos", progresso: 72, ultimaAtividade: "Matemática Básica" },
    { id: 3, nome: "Pedro Costa", progresso: 90, ultimaAtividade: "Atividade Sensorial" },
    { id: 4, nome: "Ana Oliveira", progresso: 68, ultimaAtividade: "Coordenação Motora" },
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo ao Centro Educacional Pequeno Milagre</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nova Atividade
        </Button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Alunos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">+2 este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Atividades Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">8</div>
            <p className="text-xs text-muted-foreground">4 concluídas</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progresso Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">78%</div>
            <p className="text-xs text-muted-foreground">+5% este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Próximas Reuniões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>
      </div>

      {/* Próximas Atividades e Alunos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Próximas Atividades
            </CardTitle>
            <CardDescription>Atividades programadas para hoje</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {proximasAtividades.map((atividade) => (
              <div key={atividade.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-medium text-sm">{atividade.titulo}</p>
                    <p className="text-xs text-muted-foreground">{atividade.horario}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {atividade.tipo}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Progresso dos Alunos
            </CardTitle>
            <CardDescription>Acompanhamento recente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {alunosRecentes.map((aluno) => (
              <div key={aluno.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {aluno.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{aluno.nome}</p>
                    <p className="text-xs text-muted-foreground">{aluno.ultimaAtividade}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{aluno.progresso}%</p>
                  <div className="w-16 h-1 bg-muted rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${aluno.progresso}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCalendario = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendário</h1>
          <p className="text-muted-foreground">Gerencie atividades e compromissos</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Agendar Atividade
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendário Principal */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle>Dezembro 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia) => (
                <div key={dia} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {dia}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const dia = i - 6 + 1
                const isToday = dia === 15
                const hasActivity = [3, 7, 12, 15, 18, 22, 28].includes(dia)

                return (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer
                      ${dia < 1 || dia > 31 ? "text-muted-foreground/50" : "text-foreground hover:bg-muted"}
                      ${isToday ? "bg-primary text-primary-foreground font-bold" : ""}
                      ${hasActivity && !isToday ? "bg-accent/20 text-accent font-medium" : ""}
                    `}
                  >
                    {dia > 0 && dia <= 31 ? dia : ""}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Atividades do Dia */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Hoje - 15/12</CardTitle>
            <CardDescription>8 atividades programadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {proximasAtividades.map((atividade) => (
              <div key={atividade.id} className="p-3 rounded-lg bg-muted/50 border-l-4 border-primary">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-primary">{atividade.horario}</span>
                  <Badge variant="outline" className="text-xs">
                    {atividade.tipo}
                  </Badge>
                </div>
                <p className="text-sm text-foreground">{atividade.titulo}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderAlunos = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Acompanhamento dos Alunos</h1>
          <p className="text-muted-foreground">Monitore o progresso individual</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Aluno
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alunosRecentes
          .concat([
            { id: 5, nome: "Lucas Ferreira", progresso: 76, ultimaAtividade: "Comunicação Social" },
            { id: 6, nome: "Sofia Rodrigues", progresso: 82, ultimaAtividade: "Artes e Criatividade" },
          ])
          .map((aluno) => (
            <Card key={aluno.id} className="bg-card border-border hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {aluno.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{aluno.nome}</CardTitle>
                    <CardDescription>{aluno.ultimaAtividade}</CardDescription>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progresso Geral</span>
                    <span className="text-sm font-medium text-primary">{aluno.progresso}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${aluno.progresso}%` }}
                    ></div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Ativo
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TEA
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )

  const renderAtividades = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Atividades Educacionais</h1>
          <p className="text-muted-foreground">Gerencie e organize as atividades</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nova Atividade
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            titulo: "Terapia da Fala",
            descricao: "Desenvolvimento da comunicação verbal",
            alunos: 8,
            cor: "bg-blue-100 text-blue-800",
          },
          {
            titulo: "Coordenação Motora",
            descricao: "Exercícios de motricidade fina e grossa",
            alunos: 12,
            cor: "bg-green-100 text-green-800",
          },
          {
            titulo: "Matemática Adaptada",
            descricao: "Conceitos matemáticos básicos",
            alunos: 15,
            cor: "bg-purple-100 text-purple-800",
          },
          {
            titulo: "Atividades Sensoriais",
            descricao: "Estímulos táteis e visuais",
            alunos: 10,
            cor: "bg-orange-100 text-orange-800",
          },
          {
            titulo: "Comunicação Social",
            descricao: "Interação e habilidades sociais",
            alunos: 18,
            cor: "bg-pink-100 text-pink-800",
          },
          {
            titulo: "Artes e Criatividade",
            descricao: "Expressão artística e criativa",
            alunos: 14,
            cor: "bg-yellow-100 text-yellow-800",
          },
        ].map((atividade, index) => (
          <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{atividade.titulo}</CardTitle>
                <Badge className={atividade.cor}>{atividade.alunos} alunos</Badge>
              </div>
              <CardDescription>{atividade.descricao}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Próxima sessão</span>
                <span className="text-sm font-medium">Amanhã, 10:00</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Pequeno Milagre</h1>
              <p className="text-xs text-muted-foreground">Centro Educacional</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setTelaAtiva("configuracoes")}>
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={telaAtiva === item.id ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${telaAtiva === item.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  onClick={() => setTelaAtiva(item.id)}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {telaAtiva === "dashboard" && renderDashboard()}
          {telaAtiva === "calendario" && renderCalendario()}
          {telaAtiva === "alunos" && renderAlunos()}
          {telaAtiva === "atividades" && renderAtividades()}
        </main>
      </div>
    </div>
  )
}
