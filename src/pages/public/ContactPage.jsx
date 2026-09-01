import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';

export const ContactPage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'institution', // 'institution', 'industry', 'student', 'other'
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    addToast({
      title: '📨 Message Sent Successfully!',
      message: 'Thank you! A KaushalEra ecosystem advisor will reach out within 24 business hours.',
      type: 'success',
      duration: 4000
    });

    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: 'institution',
      message: ''
    });
  };

  const faqs = [
    {
      q: 'How does KaushalEra calculate the AI skill match score?',
      a: 'We evaluate multi-factor parameters including standardized proctored coding assessments, GitHub capstone code quality, verified academic GPA, and explicit technology keywords.'
    },
    {
      q: 'Are the assessments proctored and industry-recognized?',
      a: 'Yes, all assessments are timed, anti-cheating protected, and designed by senior engineering practitioners across Fortune 500 tech firms.'
    },
    {
      q: 'How can academic institutions integrate with the platform?',
      a: 'Universities can onboard through a simple institutional MoU, enabling automated student enrollment, faculty grant matching, and NAAC/NBA compliance exports.'
    }
  ];

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in select-none">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold font-heading text-primary">
          Get in Touch with KaushalEra
        </h1>
        <p className="text-sm text-secondary">
          Connect with our academic partnership advisors, request an enterprise recruiter demo, or submit student feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card p-6 bg-slate-900/60 border-white/10 space-y-4">
            <h3 className="text-lg font-bold font-heading text-primary">Ecosystem Headquarters</h3>
            
            <div className="space-y-3 text-xs text-secondary">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand shrink-0 mt-0.5" />
                <span>KaushalEra National Innovation Center, Tech Corridor, Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-teal shrink-0" />
                <span>partnerships@kaushalera.gov.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald shrink-0" />
                <span>+91 (80) 4567-8900 (Mon - Fri, 9 AM - 6 PM)</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="card p-6 bg-slate-900/60 border-white/10 space-y-4">
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-muted flex items-center gap-2">
              <HelpCircle size={15} /> Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="space-y-1 text-xs">
                  <div className="font-bold text-primary">{f.q}</div>
                  <div className="text-muted leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact / Partnership Form */}
        <div className="lg:col-span-7 card p-8 bg-slate-900/80 border-white/10 shadow-2xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-heading text-primary">Send an Inquiry</h3>
            <p className="text-xs text-muted">Fill in your details below and our team will get back to you.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ramesh / Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Institution / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Tech / TechNova Labs"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="input-label">Inquiry Nature</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="input-field"
                >
                  <option value="institution" className="bg-slate-900">Academic Institution Partnership</option>
                  <option value="industry" className="bg-slate-900">Enterprise Recruiter Demo</option>
                  <option value="student" className="bg-slate-900">Student & Placement Support</option>
                  <option value="faculty" className="bg-slate-900">Faculty Research Collaboration</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Your Message or Requirements</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your student cohort size, hiring requirements, or research lab interests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field resize-none text-xs"
              />
            </div>

            <Button
              variant="primary"
              size="md"
              type="submit"
              icon={Send}
              className="w-full"
            >
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
