import React from 'react';
import { makeStyles, tokens, Title3, Button, Card, CardHeader, CardPreview } from '@fluentui/react-components';
import { Cloud24Regular } from '@fluentui/react-icons';
import { Layout } from '@/components/Layout';

const useStyles = makeStyles({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: tokens.colorNeutralForeground1,
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: tokens.colorNeutralForeground2,
  },
  featuredSection: {
    marginTop: '3rem',
  },
  vmGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  vmCard: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

export default function Home() {
  const styles = useStyles();

  const featuredVMs = [
    {
      id: 1,
      name: 'Windows Server 2022',
      specs: '4 vCPU, 8GB RAM, 100GB SSD',
      price: '$0.50/hour',
    },
    {
      id: 2,
      name: 'Ubuntu Server 22.04',
      specs: '2 vCPU, 4GB RAM, 50GB SSD',
      price: '$0.30/hour',
    },
    {
      id: 3,
      name: 'CentOS 8',
      specs: '4 vCPU, 16GB RAM, 200GB SSD',
      price: '$0.75/hour',
    },
  ];

  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.title}>VMware Rental Service</h1>
        <p className={styles.subtitle}>
          Rent high-performance virtual machines instantly. Pay only for what you use.
        </p>
        <Button appearance="primary" size="large" icon={<Cloud24Regular />}>
          Get Started
        </Button>
      </section>

      <section className={styles.featuredSection}>
        <Title3>Featured Virtual Machines</Title3>
        <div className={styles.vmGrid}>
          {featuredVMs.map((vm) => (
            <Card key={vm.id} className={styles.vmCard}>
              <CardHeader header={vm.name} />
              <CardPreview>
                <div style={{ padding: '1rem' }}>
                  <p>{vm.specs}</p>
                  <p style={{ color: tokens.colorBrandForeground1 }}>{vm.price}</p>
                </div>
              </CardPreview>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
} 