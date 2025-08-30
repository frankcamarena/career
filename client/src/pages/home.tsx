import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ExternalLink, Award, Cloud, Code, ChartBar, Brain, Database, GraduationCap, Phone, MapPin } from "lucide-react";
import linesGraphVideo from "@assets/lines_graph_1756523478531.mp4";
import profileImage from "@assets/image_profile_1756566806677.jpeg";

const projects = [
  {
    id: 1,
    title: "Financial Risk Assessment Dashboard",
    description: "Comprehensive risk analysis platform that reduced portfolio losses by 35% through predictive modeling and real-time monitoring of market volatility indicators.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "Tableau", "SQL", "VaR Modeling"],
    insights: "Identified 3 critical risk factors that accounted for 80% of portfolio volatility",
    link: "https://medium.com/@frankcamarena/financial-risk-dashboard"
  },
  {
    id: 2,
    title: "Fraud Detection ML Model",
    description: "Advanced machine learning solution achieving 94% accuracy in fraud detection, saving the company $2.3M annually by identifying suspicious transactions in real-time.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "XGBoost", "AWS", "MLOps"],
    insights: "Transaction timing patterns were the strongest fraud indicators, improving detection by 23%",
    link: "https://medium.com/@frankcamarena/fraud-detection-ml"
  },
  {
    id: 3,
    title: "Executive KPI Dashboard Suite",
    description: "Comprehensive C-level dashboard providing real-time visibility into 15 critical business metrics, enabling faster decision-making and 28% improvement in strategic response time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Power BI", "DAX", "Azure", "ETL"],
    insights: "Consolidated 47 disparate reports into a single executive view, saving 15 hours/week",
    link: "https://medium.com/@frankcamarena/executive-kpi-dashboard"
  },
  {
    id: 4,
    title: "Market Segmentation Analysis",
    description: "Advanced customer segmentation using clustering algorithms that identified 7 distinct customer personas, leading to a 42% increase in targeted marketing campaign effectiveness.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["R", "K-Means", "Tableau", "RFM Analysis"],
    insights: "High-value segment represented only 12% of customers but 67% of revenue",
    link: "https://medium.com/@frankcamarena/market-segmentation"
  },
  {
    id: 5,
    title: "Data Pipeline Automation",
    description: "End-to-end data pipeline automation that processes 500GB+ daily, reducing manual data preparation time by 85% and ensuring 99.9% data accuracy across all business units.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Apache Spark", "Airflow", "AWS S3", "PostgreSQL"],
    insights: "Automated error detection prevented 23 critical data quality issues",
    link: "https://medium.com/@frankcamarena/data-pipeline-automation"
  },
  {
    id: 6,
    title: "Algorithmic Trading Strategy Analysis",
    description: "Quantitative analysis of trading strategies using statistical modeling and backtesting, achieving 18% annual return with maximum drawdown under 8% across multiple asset classes.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "Pandas", "Zipline", "Quantlib"],
    insights: "Mean reversion strategies outperformed momentum in volatile market conditions",
    link: "https://medium.com/@frankcamarena/algorithmic-trading-analysis"
  }
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="text-2xl" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 88 },
      { name: "SQL", level: 92 },
      { name: "SAS", level: 75 }
    ]
  },
  {
    title: "Visualization Tools",
    icon: <ChartBar className="text-2xl" />,
    skills: [
      { name: "Tableau", level: 98 },
      { name: "Power BI", level: 90 },
      { name: "D3.js", level: 82 },
      { name: "Plotly", level: 85 }
    ]
  },
  {
    title: "Cloud & Big Data",
    icon: <Cloud className="text-2xl" />,
    skills: [
      { name: "AWS", level: 87 },
      { name: "Azure", level: 83 },
      { name: "Apache Spark", level: 78 },
      { name: "Snowflake", level: 80 }
    ]
  },
  {
    title: "Machine Learning",
    icon: <Brain className="text-2xl" />,
    skills: [
      { name: "Scikit-learn", level: 93 },
      { name: "XGBoost", level: 89 },
      { name: "TensorFlow", level: 76 },
      { name: "PyTorch", level: 72 }
    ]
  }
];

const certifications = [
  {
    title: "Tableau Desktop Specialist",
    issuer: "Salesforce/Tableau",
    year: "2024",
    icon: <Award className="text-3xl" />
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: <Cloud className="text-3xl" />
  },
  {
    title: "Microsoft Certified: Azure Data Scientist",
    issuer: "Microsoft",
    year: "2023",
    icon: <Award className="text-3xl" />
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    year: "2023",
    icon: <ChartBar className="text-3xl" />
  },
  {
    title: "Certified Analytics Professional (CAP)",
    issuer: "INFORMS",
    year: "2022",
    icon: <Database className="text-3xl" />
  },
  {
    title: "Master of Science in Data Science",
    issuer: "Stanford University",
    year: "2020",
    icon: <GraduationCap className="text-3xl" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-primary">Frank Camarena</h1>
              <p className="text-sm text-muted-foreground">Business Data Analyst</p>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-projects"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-skills"
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-certifications"
              >
                Certifications
              </a>
              <a 
                href="#contact" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:fgustavocamarena@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email-header"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/frankcamarena/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin-header"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/f10frank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github-header"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center text-white relative overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={linesGraphVideo}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforming Data into 
              <span className="text-white block mt-2"> Strategic Insights</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Business Data Analyst with 5+ years of experience turning complex datasets into actionable business intelligence that drives $10M+ in value creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#projects" 
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-lg"
                data-testid="button-view-work"
              >
                View My Work
                <ChartBar className="ml-3 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center text-lg"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Business Data Analyst who specializes in transforming complex datasets into strategic insights that drive business growth. With a strong foundation in statistical analysis, machine learning, and data visualization, I help organizations make data-driven decisions that deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My expertise spans across financial modeling, predictive analytics, and business intelligence, with a proven track record of implementing data solutions that have generated over $10M in business value across various industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="metric-card p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-projects-count">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="metric-card p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-value-generated">$10M+</div>
                    <div className="text-sm text-muted-foreground">Value Generated</div>
                  </CardContent>
                </Card>
                <Card className="metric-card p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-experience-years">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="metric-card p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary" data-testid="text-certifications-count">15+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={profileImage}
                  alt="Alexander Rodriguez - Business Data Analyst" 
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my portfolio of data-driven solutions that have delivered measurable business impact across various industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="card-hover overflow-hidden" data-testid={`card-project-${project.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="skill-tag">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    <strong>Key Insights:</strong> {project.insights}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                    data-testid={`link-project-case-study-${project.id}`}
                  >
                    Read Case Study <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive toolkit for modern data analysis and business intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6" data-testid={`card-skill-category-${categoryIndex}`}>
                <CardContent className="p-0">
                  <div className="text-primary mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-secondary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-muted-foreground">
              Validated expertise through industry-recognized certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`card-certification-${index}`}>
                <CardContent className="p-0">
                  <div className="text-primary mb-3">
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-2" data-testid={`text-cert-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 contact-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your data into strategic insights? Let's discuss how I can help drive your business forward through analytics and data-driven decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-tableau-primary hover:bg-tableau-light px-8 py-3"
              data-testid="button-send-email"
            >
              <a href="mailto:alexander.rodriguez@email.com">
                <Mail className="mr-2 w-4 h-4" />
                Send Email
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              data-testid="button-connect-linkedin"
            >
              <a href="https://linkedin.com/in/alexrodriguez" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-4 h-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tableau-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frank Camarena</h3>
              <p className="text-gray-300 mb-4">Business Data Analyst specializing in transforming complex data into strategic business insights.</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/frankcamarena/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-linkedin-footer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/f10frank" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-github-footer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:fgustavocamarena@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-email-footer"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors" data-testid="link-about">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors" data-testid="link-projects">Projects</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors" data-testid="link-skills">Skills</a></li>
                <li><a href="#certifications" className="text-gray-300 hover:text-white transition-colors" data-testid="link-certifications">Certifications</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" /> 
                  <span data-testid="text-email">fgustavocamarena@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 w-4 h-4" /> 
                  <span data-testid="text-phone">+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 w-4 h-4" /> 
                  <span data-testid="text-location">New York, NY</span>
                </p>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-600 my-8" />
          
          <div className="text-center text-gray-300">
            <p>&copy; 2024 Frank Camarena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
