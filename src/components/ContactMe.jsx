import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert, Tabs, Tab, Badge } from "react-bootstrap";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaDownload,
  FaPaperPlane,
  FaClock,
  FaCalendarAlt,
  FaFileUpload,
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa";
import axios from "axios";
import "./ContactMe.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState("form");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setSelectedFile(file);
    } else {
      alert("File size must be less than 5MB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours!"
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
        company: "",
        budget: "",
        timeline: "",
        projectType: ""
      });
      setSelectedFile(null);
    } catch (error) {
      setSubmitStatus({
        type: "danger",
        message: "Sorry, there was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "johnpaul.legaspi@example.com",
      link: "mailto:johnpaul.legaspi@example.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567",
      description: "Quick questions & urgent matters"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
      description: "Available for local meetings"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/johnpaullegaspi",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/johnpaullegaspi",
      color: "#333"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/johnpaullegaspi",
      color: "#1da1f2"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/johnpaullegaspi",
      color: "#e4405f"
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      url: "https://t.me/johnpaullegaspi",
      color: "#0088cc"
    },
    {
      icon: <FaGlobe />,
      name: "Website",
      url: "https://johnpaullegaspi.com",
      color: "#60a5fa"
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consultation",
    "Freelance Work",
    "Partnership",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "To be discussed"
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 weeks",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const availabilityStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 18) {
      return { status: "Available", color: "success" };
    } else if (day >= 1 && day <= 5) {
      return { status: "After Hours", color: "warning" };
    } else {
      return { status: "Weekend", color: "info" };
    }
  };

  const status = availabilityStatus();

  return (
    <div className="contact-me-page">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="contact-header text-center mb-5">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Feel free to reach out if you'd like to connect!
              </p>
              
              {/* Status Indicator */}
              <div className="status-indicator">
                <Badge bg={status.color} className="status-badge">
                  <FaClock className="me-2" />
                  {status.status}
                </Badge>
                {!isOnline && (
                  <Badge bg="secondary" className="ms-2">
                    Offline
                  </Badge>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xl={10} lg={12}>
            <div className="contact-content">
              <Row>
                {/* Contact Information */}
                <Col lg={4} md={12} className="mb-4">
                  <div className="contact-info-section">
                    <h3 className="section-title">Contact Info</h3>
                    <div className="contact-info-list">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="contact-info-item">
                          <div className="contact-icon">
                            {info.icon}
                          </div>
                          <div className="contact-details">
                            <h5>{info.title}</h5>
                            {info.link ? (
                              <a href={info.link} className="contact-link">
                                {info.value}
                              </a>
                            ) : (
                              <p>{info.value}</p>
                            )}
                            <small className="contact-description">{info.description}</small>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="social-links-section mt-4">
                      <h5>Follow Me</h5>
                      <div className="social-links">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ '--social-color': social.color }}
                            title={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Quick Contact Buttons */}
                    <div className="quick-contact-section mt-4">
                      <h5>Quick Contact</h5>
                      <div className="quick-contact-buttons">
                        <Button
                          href="mailto:johnpaul.legaspi@example.com"
                          variant="outline-primary"
                          size="sm"
                          className="quick-btn"
                        >
                          <FaEnvelope className="me-2" />
                          Send Email
                        </Button>
                        <Button
                          href="https://wa.me/15551234567"
                          target="_blank"
                          variant="outline-success"
                          size="sm"
                          className="quick-btn"
                        >
                          <FaWhatsapp className="me-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Contact Form */}
                <Col lg={8} md={12}>
                  <div className="contact-form-section">
                    <Tabs
                      activeKey={activeTab}
                      onSelect={(k) => setActiveTab(k)}
                      className="contact-tabs"
                    >
                      <Tab eventKey="form" title="Contact Form">
                        <h3 className="section-title">Send Message</h3>
                        
                        {submitStatus && (
                          <Alert 
                            variant={submitStatus.type} 
                            className="mb-4"
                            dismissible
                            onClose={() => setSubmitStatus(null)}
                          >
                            {submitStatus.message}
                          </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  placeholder="Your name"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  placeholder="your.email@example.com"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Your phone number"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Company</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="company"
                                  value={formData.company}
                                  onChange={handleChange}
                                  placeholder="Your company (optional)"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Project Type</Form.Label>
                                <Form.Select
                                  name="projectType"
                                  value={formData.projectType}
                                  onChange={handleChange}
                                >
                                  <option value="">Select project type</option>
                                  {projectTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Budget Range</Form.Label>
                                <Form.Select
                                  name="budget"
                                  value={formData.budget}
                                  onChange={handleChange}
                                >
                                  <option value="">Select budget range</option>
                                  {budgetRanges.map((budget, index) => (
                                    <option key={index} value={budget}>{budget}</option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Timeline</Form.Label>
                            <Form.Select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                            >
                              <option value="">Select timeline</option>
                              {timelineOptions.map((timeline, index) => (
                                <option key={index} value={timeline}>{timeline}</option>
                              ))}
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Subject *</Form.Label>
                            <Form.Control
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              placeholder="What's this about?"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              placeholder="Tell me about your project or opportunity..."
                            />
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>
                              <FaFileUpload className="me-2" />
                              Attachments (Optional)
                            </Form.Label>
                            <Form.Control
                              type="file"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                            />
                            <Form.Text className="text-muted">
                              Max file size: 5MB. Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG
                            </Form.Text>
                            {selectedFile && (
                              <div className="selected-file mt-2">
                                <Badge bg="info">
                                  <FaDownload className="me-1" />
                                  {selectedFile.name}
                                </Badge>
                              </div>
                            )}
                          </Form.Group>

                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            className="submit-btn"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="me-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </Form>
                      </Tab>

                      <Tab eventKey="direct" title="Direct Contact">
                        <div className="direct-contact-content">
                          <h3 className="section-title">Direct Contact Methods</h3>
                          <Row>
                            <Col md={6}>
                              <div className="direct-contact-card">
                                <div className="direct-contact-icon">
                                  <FaEnvelope />
                                </div>
                                <h5>Email</h5>
                                <p>For detailed inquiries and project discussions</p>
                                <Button
                                  href="mailto:johnpaul.legaspi@example.com"
                                  variant="outline-primary"
                                  className="direct-contact-btn"
                                >
                                  Send Email
                                </Button>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="direct-contact-card">
                                <div className="direct-contact-icon">
                                  <FaWhatsapp />
                                </div>
                                <h5>WhatsApp</h5>
                                <p>For quick questions and urgent matters</p>
                                <Button
                                  href="https://wa.me/15551234567"
                                  target="_blank"
                                  variant="outline-success"
                                  className="direct-contact-btn"
                                >
                                  Start Chat
                                </Button>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="direct-contact-card">
                                <div className="direct-contact-icon">
                                  <FaPhone />
                                </div>
                                <h5>Phone Call</h5>
                                <p>For immediate assistance and consultations</p>
                                <Button
                                  href="tel:+15551234567"
                                  variant="outline-info"
                                  className="direct-contact-btn"
                                >
                                  Call Now
                                </Button>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="direct-contact-card">
                                <div className="direct-contact-icon">
                                  <FaCalendarAlt />
                                </div>
                                <h5>Schedule Meeting</h5>
                                <p>Book a time for detailed discussions</p>
                                <Button
                                  href="https://calendly.com/johnpaullegaspi"
                                  target="_blank"
                                  variant="outline-warning"
                                  className="direct-contact-btn"
                                >
                                  Book Meeting
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;
